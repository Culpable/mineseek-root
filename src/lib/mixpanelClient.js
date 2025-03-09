import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

/**
 * Initialize Mixpanel with environment token and Session Replay configuration
 * - Session Replay records user interactions to review later
 * - track_pageview set to true for automatic page view tracking
 * - Using cookie persistence with cross-subdomain support
 * - Recording 100% of sessions
 * - Masks sensitive data and collects font information
 * - Session timeouts configured for optimal recording
 */
export const initMixpanel = () => {
  if (!MIXPANEL_TOKEN) {
    console.warn('Mixpanel token is missing! Check your .env.local file.');
    return;
  }

  mixpanel.init(MIXPANEL_TOKEN, {
    debug: true,
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
};

/**
 * Expose the mixpanel instance for custom event tracking
 * This allows components to import and use mixpanel directly
 */
export default mixpanel; 