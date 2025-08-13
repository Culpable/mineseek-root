(function() {
    // Function to get query parameter value by name
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Function to get the initial referrer
    function getInitialReferrer() {
        return document.referrer;
    }

    // Function to get the referring domain
    function getReferringDomain(referrer) {
        try {
            const url = new URL(referrer);
            return url.hostname;
        } catch (e) {
            return null;
        }
    }

    // Store initial referrer and referring domain to avoid redundant calls
    const initialReferrer = getInitialReferrer();
    const referringDomain = getReferringDomain(initialReferrer);

    // Function to check if the referrer or browser is Facebook
    function isFacebookSource() {
        const userAgent = navigator.userAgent.toLowerCase();
        return (
            (referringDomain && referringDomain.includes('facebook.com')) ||
            userAgent.includes('fb') ||
            userAgent.includes('facebook')
        );
    }

    // Function to check if the referrer is Google
    function isGoogleSource() {
        return (
            referringDomain && referringDomain.includes('google.com')
        );
    }

    // Function to check if the referrer is Bing
    function isBingSource() {
        return (
            referringDomain && referringDomain.includes('bing.com')
        );
    }

    // Function to check if the referrer is LinkedIn
    function isLinkedInSource() {
        return (
            referringDomain && (
                referringDomain.includes('linkedin.com') || 
                referringDomain.includes('lnkd.in')
            )
        );
    }
    
    // Function to check if the in-app browser is LinkedIn
    function isLinkedInApp() {
        try {
            const userAgent = navigator.userAgent.toLowerCase();
            return userAgent.includes('linkedin');
        } catch (e) {
            return false;
        }
    }

    // Determine referral source
    let referralSource = 'Direct or Other';

    const fbclid = getQueryParam('fbclid');
    const utmSource = getQueryParam('utm_source');
    const liclid = getQueryParam('liclid'); // LinkedIn click identifier
    const liFatId = getQueryParam('li_fat_id'); // LinkedIn’s click identifier (Campaign Manager)
    
    // Additional parameters to capture for Google Ads
    const campaignId = getQueryParam('campaign');
    const adGroupId = getQueryParam('adgroup');
    const keyword = getQueryParam('keyword');
    
    // Store additional data for tracking
    let additionalReferralData = {};

    if (fbclid) {
        referralSource = 'Facebook';
    } else if (liclid || liFatId) {
        referralSource = 'LinkedIn';
    } else if (utmSource) {
        const normalisedUtmSource = utmSource.toLowerCase();
        if (normalisedUtmSource === 'google_ads') {
            referralSource = 'Google Ads';
            // Capture additional parameters if present
            if (campaignId) additionalReferralData['Campaign ID'] = campaignId;
            if (adGroupId) additionalReferralData['Ad Group ID'] = adGroupId;
            if (keyword) additionalReferralData['Keyword Match'] = keyword;
            
            // New parameters with human-readable names
            const creative = getQueryParam('creative');
            const deviceType = getQueryParam('device');
            const adPosition = getQueryParam('adposition');
            
            if (creative) additionalReferralData['Ad Creative'] = creative;
            if (deviceType) {
                // Convert device code to readable format
                let deviceName = 'Unknown';
                if (deviceType === 'c') deviceName = 'Computer';
                else if (deviceType === 'm') deviceName = 'Mobile';
                else if (deviceType === 't') deviceName = 'Tablet';
                
                additionalReferralData['Device Type'] = deviceName;
            }
            if (adPosition) additionalReferralData['Ad Position'] = adPosition;
        } else if (normalisedUtmSource === 'chatgpt.com') {
            referralSource = 'ChatGPT';
        } else if (normalisedUtmSource === 'perplexity.ai') {
            referralSource = 'Perplexity';
        } else if (normalisedUtmSource === 'deepseek.com') {
            referralSource = 'DeepSeek';
        } else if (normalisedUtmSource === 'linkedin' || normalisedUtmSource === 'linkedin.com' || normalisedUtmSource === 'lnkd.in') {
            referralSource = 'LinkedIn';
        } else {
            referralSource = normalisedUtmSource;
        }
    } else if (isFacebookSource()) {
        referralSource = 'Facebook';
    } else if (isGoogleSource()) {
        referralSource = 'Google';
    } else if (isBingSource()) {
        referralSource = 'Bing';
    } else if (isLinkedInSource() || isLinkedInApp()) {
        referralSource = 'LinkedIn';
    } // No need for an else here as 'Direct or Other' is already set by default

    // Polling mechanism to ensure MixPanel is loaded before tracking
    var maxAttempts = 10;
    var attempts = 0;
    var interval = 100; // in milliseconds

    function trackReferralSource() {
        attempts++;
        // Safely check if mixpanel is defined and ready
        if (window.mixpanelLoaded && typeof window.mixpanel !== 'undefined' && typeof window.mixpanel.track === 'function') {
            // Create tracking data object
            const trackingData = {
                'Referral Source': referralSource
            };
            
            // Add additional referral data if available
            if (Object.keys(additionalReferralData).length > 0) {
                Object.assign(trackingData, additionalReferralData);
            }
            
            // Track the referral identification as an event for analytics
            window.mixpanel.track('Referral Source Identified', trackingData);

            // Also persist the initial referral details to the user profile using set_once
            // so it is captured only the first time we see this user.
            try {
                // Ensure the user has a distinct id and is identified before setting people properties
                if (typeof window.mixpanel.get_distinct_id === 'function') {
                    const distinctId = window.mixpanel.get_distinct_id();
                    if (distinctId) {
                        window.mixpanel.identify(distinctId);
                    }
                }

                // Prepare initial profile properties (set_once so they are immutable first-touch values)
                const initialProfileProps = { 'Initial Referral Source': referralSource };
                if (referringDomain) {
                    initialProfileProps['Initial Referring Domain'] = referringDomain;
                }

                if (window.mixpanel.people && typeof window.mixpanel.people.set_once === 'function') {
                    window.mixpanel.people.set_once(initialProfileProps);
                }

                // Optionally register_once as super properties to attach to all future events automatically
                if (typeof window.mixpanel.register_once === 'function') {
                    window.mixpanel.register_once(initialProfileProps);
                }
            } catch (e) {
                // Fail silently to avoid impacting user experience if Mixpanel people API is unavailable
            }
        } else if (attempts < maxAttempts) {
            // Retry after a short delay
            setTimeout(trackReferralSource, interval);
        }
    }

    // Start tracking referral source
    trackReferralSource();
})(); 