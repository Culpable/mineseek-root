import mixpanel from './mixpanelClient';

const isDevelopment = process.env.NODE_ENV === 'development';

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
    if (isDevelopment) {
      return;
    }
    if (typeof window !== 'undefined') {
      mixpanel.track(eventName, properties);
    }
  },

  /**
   * Track when a user starts playing a video
   * @param {string} videoId - Unique identifier for the video (e.g., YouTube id)
   * @param {Object} properties - Additional context such as title, location, and page
   */
  trackVideoPlay: (videoId, properties = {}) => {
    if (isDevelopment) {
      return;
    }
    if (typeof window !== 'undefined') {
      mixpanel.track('Video Play', {
        video_id: videoId,
        ...properties
      });
    }
  },

  /**
   * Track form submission events
   * @param {string} formName - Name of the form
   * @param {Object} formData - Form data being submitted
   */
  trackFormSubmission: (formName, formData = {}) => {
    if (isDevelopment) {
      return;
    }
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
    if (isDevelopment) {
      return;
    }
    if (typeof window !== 'undefined') {
      mixpanel.track('Button Clicked', {
        button_name: buttonName,
        ...properties
      });
    }
  }
};

export default analytics; 
