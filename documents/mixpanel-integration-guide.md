# Mixpanel Integration Guide for Next.js Projects

This guide explains how to integrate Mixpanel analytics with Session Replay functionality into a Next.js project using the App Router architecture.

## Overview

This integration provides:
- **Analytics tracking** for user events and page views
- **Session Replay** to record and review user interactions
- **Automatic page view tracking** when users navigate
- **Client-side implementation** compatible with static site generation
- **Analytics wrapper** for consistent event tracking interface
- **Referral tracking integration** for marketing attribution

## Installation

Install the Mixpanel browser package:

```bash
npm install mixpanel-browser
```

## File Structure

```
src/
├── lib/
│   ├── mixpanelClient.js          # Mixpanel configuration and initialization
│   └── analytics.js               # Analytics utility wrapper for consistent tracking
├── components/
│   └── MixpanelProvider.jsx       # Provider component for app-wide integration
└── app/
    └── layout.jsx                 # Root layout where provider is added
```

## Implementation

### 1. Create Mixpanel Client Configuration

Create `src/lib/mixpanelClient.js`:

```javascript
import mixpanel from 'mixpanel-browser';

// Hardcoded token instead of using environment variables
const MIXPANEL_TOKEN = '187560cd6dae284087bd43a242bde46e';

/**
 * Initialize Mixpanel with hardcoded token and Session Replay configuration
 * - Session Replay records user interactions to review later
 * - track_pageview set to true for automatic page view tracking
 * - Using cookie persistence with cross-subdomain support
 * - Recording 100% of sessions
 * - Masks sensitive data and collects font information
 * - Session timeouts configured for optimal recording
 */
export const initMixpanel = () => {
  mixpanel.init(MIXPANEL_TOKEN, {
    track_pageview: true,
    persistence: 'localStorage', // Only set this to 'cookie' if using cross-subdomain tracking
    // cross_subdomain_cookie: true,
    record_sessions_percent: 100,
    record_block_selector: "",
    record_mask_text_selector: ".sensitive-data",
    record_collect_fonts: true,
    record_idle_timeout_ms: 600000,
    record_min_ms: 3000,
  });
  
  // Explicitly expose mixpanel instance globally
  window.mixpanel = mixpanel;
  
  // Set flag for referral tracking script
  window.mixpanelLoaded = true;
};

/**
 * Expose the mixpanel instance for custom event tracking
 * This allows components to import and use mixpanel directly
 */
export default mixpanel;
```

**Note**: While the token is currently hardcoded, it's recommended to use environment variables for better security:
```javascript
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '187560cd6dae284087bd43a242bde46e';
```

### 2. Create Analytics Utility Wrapper

Create `src/lib/analytics.js` for a consistent tracking interface:

```javascript
import mixpanel from './mixpanelClient';

/**
 * Analytics utility functions for tracking user interactions
 * Provides a consistent interface for event tracking throughout the application
 */
const analytics = {
  /**
   * Track a custom event with properties
   * @param {string} eventName - Name of the event
   * @param {Object} properties - Additional event properties
   */
  track: (eventName, properties = {}) => {
    if (typeof window !== 'undefined') {
      mixpanel.track(eventName, properties);
    }
  },

  /**
   * Track form submission events
   * @param {string} formName - Name of the form
   * @param {Object} formData - Form data being submitted
   */
  trackFormSubmission: (formName, formData = {}) => {
    if (typeof window !== 'undefined') {
      mixpanel.track('Form Submitted', {
        form_name: formName,
        ...formData
      });
    }
  },

  /**
   * Track button click events
   * @param {string} buttonName - Name of the button
   * @param {Object} properties - Additional properties
   */
  trackButtonClick: (buttonName, properties = {}) => {
    if (typeof window !== 'undefined') {
      mixpanel.track('Button Clicked', {
        button_name: buttonName,
        ...properties
      });
    }
  }
};

export default analytics;
```

### 3. Create Mixpanel Provider Component

Create `src/components/MixpanelProvider.jsx`:

```javascript
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initMixpanel } from '@/lib/mixpanelClient';
import mixpanel from '@/lib/mixpanelClient';

/**
 * Client component that initializes Mixpanel with Session Replay
 * Removed useSearchParams dependency to fix build errors
 */
export default function MixpanelProvider() {
  const pathname = usePathname();

  // Initialize Mixpanel once on component mount
  useEffect(() => {
    console.log('Initializing Mixpanel with Session Replay...');
    initMixpanel();
    // Flag is now set in initMixpanel
  }, []);

  // Track page views whenever the pathname changes
  // Note: We're no longer tracking query parameters to avoid build errors
  useEffect(() => {
    if (pathname) {
      // Track the page view without search params
      mixpanel.track('Page View', { 
        url: pathname,
        page: pathname
      });
    }
  }, [pathname]);

  // This component doesn't render anything
  return null;
}
```

**Important**: The `useSearchParams` hook was intentionally removed to prevent build errors with static site generation.

### 4. Add Provider to Your App

In your root layout (`src/app/layout.jsx`):

```javascript
import MixpanelProvider from '@/components/MixpanelProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Add Mixpanel provider at the top level */}
        <MixpanelProvider />
        {children}
      </body>
    </html>
  );
}
```

## Usage Examples

### Using the Analytics Wrapper (Recommended)

Import and use the analytics utility for consistent tracking:

```javascript
import analytics from '@/lib/analytics';

export default function ContactForm() {
  const handleSubmit = async (event) => {
    // ... form submission logic
    
    // Track successful submission
    analytics.trackFormSubmission('Contact Form', {
      email: formData.email,
      company: formData.company,
      status: 'success'
    });
  };

  const handleButtonClick = () => {
    analytics.trackButtonClick('signup', {
      location: 'hero_section'
    });
  };

  return (
    // ... your component JSX
  );
}
```

### Direct Mixpanel Usage

You can also import and use mixpanel directly:

```javascript
import mixpanel from '@/lib/mixpanelClient';

export default function MyComponent() {
  const handleButtonClick = () => {
    // Track custom events
    mixpanel.track('Button Click', {
      button_name: 'signup',
      page: 'homepage'
    });
  };

  return (
    <button onClick={handleButtonClick}>
      Sign Up
    </button>
  );
}
```

### Identify Users

```javascript
import mixpanel from '@/lib/mixpanelClient';

// When user logs in
mixpanel.identify('user_id_123');

// Set user properties
mixpanel.people.set({
  '$email': 'user@example.com',
  '$name': 'John Doe',
  'plan_type': 'premium'
});
```

## Referral Tracking Integration

The implementation includes integration with a referral tracking script (`public/scripts/referral-tracking.js`) that:

1. Waits for the `window.mixpanelLoaded` flag to be set
2. Tracks referral sources with detailed attribution data
3. Sends events like 'Referral Source Identified' with campaign parameters

Example of referral tracking in action:
```javascript
// This happens automatically when referral-tracking.js detects parameters
window.mixpanel.track('Referral Source Identified', {
  referral_source: 'google',
  utm_source: 'google',
  utm_medium: 'cpc',
  utm_campaign: 'brand_campaign',
  // ... other tracking data
});
```

## Configuration Options

### Session Replay Settings

| Option | Description | Default |
|--------|-------------|---------|
| `record_sessions_percent` | Percentage of sessions to record (0-100) | 100 |
| `record_mask_text_selector` | CSS selector for elements to mask | ".sensitive-data" |
| `record_block_selector` | CSS selector for elements to exclude | "" |
| `record_collect_fonts` | Include font information in recordings | true |
| `record_idle_timeout_ms` | Idle timeout before stopping recording | 600000 (10 min) |
| `record_min_ms` | Minimum session length to save | 3000 (3 sec) |

### Privacy Considerations

To protect sensitive data:

1. **Mask sensitive elements** by adding the `sensitive-data` class:
   ```html
   <input type="password" class="sensitive-data" />
   <div class="sensitive-data">Credit card info</div>
   ```

2. **Block entire sections** by updating `record_block_selector`:
   ```javascript
   record_block_selector: ".private-section, .admin-panel"
   ```

3. **Reduce recording percentage** for production:
   ```javascript
   record_sessions_percent: 10 // Only record 10% of sessions
   ```

## Best Practices

1. **Use the analytics wrapper**: Prefer using `analytics` from `@/lib/analytics` for consistent event naming and structure

2. **Environment-based configuration**: Consider moving the hardcoded token to environment variables:
   ```javascript
   const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
   ```

3. **Conditional initialization**: Only initialize in production:
   ```javascript
   if (process.env.NODE_ENV === 'production') {
     initMixpanel();
   }
   ```

4. **Error handling**: The analytics wrapper already includes safety checks for browser environment

5. **Performance**: Mixpanel is initialized after the app loads, not blocking initial render

## Troubleshooting

### Common Issues

1. **Build errors with useSearchParams**: The current implementation avoids `useSearchParams` to prevent build issues with static generation

2. **Mixpanel not loading**: Check browser console for initialization logs and verify the token is correct

3. **Events not appearing**: Ensure you're looking at the correct Mixpanel project and that events aren't being filtered

4. **Referral tracking not working**: Verify that `referral-tracking.js` is loaded and check for the `mixpanelLoaded` flag in console

### Debug Mode

Enable debug mode during development:

```javascript
mixpanel.init(MIXPANEL_TOKEN, {
  debug: true,
  // ... other options
});
```

## Getting Your Mixpanel Token

The current implementation uses token: `187560cd6dae284087bd43a242bde46e`

To use a different token:
1. Log in to your Mixpanel account
2. Go to Settings → Project Settings
3. Copy your Project Token
4. Replace the token in `src/lib/mixpanelClient.js`

## Static Site Compatibility

This implementation is fully compatible with Next.js static site generation (`output: 'export'`) since:
- All Mixpanel functionality runs client-side
- No server-side API routes are required
- The provider component uses only client-side hooks
- `useSearchParams` is intentionally avoided to prevent build errors

---

This setup provides comprehensive analytics and session replay functionality while maintaining compatibility with static deployments and modern Next.js patterns. 