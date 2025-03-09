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