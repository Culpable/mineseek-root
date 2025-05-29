# Mixpanel Integration Guide for Next.js Projects

This guide explains how to integrate Mixpanel analytics with Session Replay functionality into a Next.js project using the App Router architecture.

## Overview

This integration provides:
- **Analytics tracking** for user events and page views
- **Session Replay** to record and review user interactions
- **Automatic page view tracking** when users navigate
- **Client-side implementation** compatible with static site generation

## Installation

Install the Mixpanel browser package:

```bash
npm install mixpanel-browser
```

## File Structure

```
src/
├── lib/
│   └── mixpanelClient.js          # Mixpanel configuration and initialization
└── components/
    └── MixpanelProvider.jsx       # Provider component for app-wide integration
```

## Implementation

### 1. Create Mixpanel Client Configuration

Create `src/lib/mixpanelClient.js`:

```javascript
import mixpanel from 'mixpanel-browser';

// Replace with your Mixpanel project token
const MIXPANEL_TOKEN = 'your_mixpanel_project_token_here';

/**
 * Initialize Mixpanel with Session Replay configuration
 * - Session Replay records user interactions for later review
 * - Configured for optimal recording with privacy considerations
 */
export const initMixpanel = () => {
  mixpanel.init(MIXPANEL_TOKEN, {
    // Automatically track page views
    track_pageview: true,
    
    // Storage configuration
    persistence: 'localStorage', // Use 'cookie' for cross-subdomain tracking
    // cross_subdomain_cookie: true, // Uncomment if needed
    
    // Session Replay settings
    record_sessions_percent: 100,        // Record 100% of sessions
    record_block_selector: "",           // CSS selector for elements to block from recording
    record_mask_text_selector: ".sensitive-data", // Mask sensitive data
    record_collect_fonts: true,          // Include font information
    record_idle_timeout_ms: 600000,      // 10 minutes idle timeout
    record_min_ms: 3000,                 // Minimum session length to record
  });
  
  // Make mixpanel available globally
  window.mixpanel = mixpanel;
  
  // Set flag for other scripts that depend on Mixpanel
  window.mixpanelLoaded = true;
};

/**
 * Export mixpanel instance for direct use in components
 */
export default mixpanel;
```

### 2. Create Mixpanel Provider Component

Create `src/components/MixpanelProvider.jsx`:

```javascript
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initMixpanel } from '@/lib/mixpanelClient';
import mixpanel from '@/lib/mixpanelClient';

/**
 * Client component that initializes Mixpanel and tracks page navigation
 * Must be a client component due to browser-specific APIs
 */
export default function MixpanelProvider() {
  const pathname = usePathname();

  // Initialize Mixpanel once when component mounts
  useEffect(() => {
    console.log('Initializing Mixpanel with Session Replay...');
    initMixpanel();
  }, []);

  // Track page views when pathname changes
  useEffect(() => {
    if (pathname) {
      mixpanel.track('Page View', { 
        url: pathname,
        page: pathname
      });
    }
  }, [pathname]);

  // This component doesn't render any UI
  return null;
}
```

### 3. Add Provider to Your App

In your root layout (`src/app/layout.js` or `src/app/layout.jsx`):

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

### Track Custom Events

In any component, import and use mixpanel directly:

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

### Track Form Submissions

```javascript
import mixpanel from '@/lib/mixpanelClient';

const handleFormSubmit = (formData) => {
  mixpanel.track('Form Submitted', {
    form_type: 'contact',
    fields_completed: Object.keys(formData).length
  });
};
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

1. **Environment-based configuration**: Use environment variables for tokens:
   ```javascript
   const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
   ```

2. **Conditional initialization**: Only initialize in production:
   ```javascript
   if (process.env.NODE_ENV === 'production') {
     initMixpanel();
   }
   ```

3. **Error handling**: Wrap tracking calls in try-catch blocks:
   ```javascript
   try {
     mixpanel.track('Event Name', properties);
   } catch (error) {
     console.warn('Mixpanel tracking failed:', error);
   }
   ```

4. **Performance**: Initialize Mixpanel after critical app functionality loads

## Troubleshooting

### Common Issues

1. **Build errors with useSearchParams**: This setup avoids `useSearchParams` to prevent build issues with static generation

2. **Mixpanel not loading**: Check browser console for initialization logs and verify your project token

3. **Events not appearing**: Ensure you're looking at the correct Mixpanel project and that events aren't being filtered

### Debug Mode

Enable debug mode during development:

```javascript
mixpanel.init(MIXPANEL_TOKEN, {
  debug: true,
  // ... other options
});
```

## Getting Your Mixpanel Token

1. Log in to your Mixpanel account
2. Go to Settings → Project Settings
3. Copy your Project Token
4. Replace `your_mixpanel_project_token_here` in the configuration

## Static Site Compatibility

This implementation is fully compatible with Next.js static site generation (`output: 'export'`) since:
- All Mixpanel functionality runs client-side
- No server-side API routes are required
- The provider component uses only client-side hooks

---

This setup provides comprehensive analytics and session replay functionality while maintaining compatibility with static deployments and modern Next.js patterns. 