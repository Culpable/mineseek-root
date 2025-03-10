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

    // Determine referral source
    let referralSource = 'Direct or Other';

    const fbclid = getQueryParam('fbclid');
    const utmSource = getQueryParam('utm_source');
    const liclid = getQueryParam('liclid'); // LinkedIn click identifier
    
    // Additional parameters to capture for Google Ads
    const campaignId = getQueryParam('campaign');
    const adGroupId = getQueryParam('adgroup');
    const keyword = getQueryParam('keyword');
    
    // Store additional data for tracking
    let additionalReferralData = {};

    if (fbclid) {
        referralSource = 'Facebook';
    } else if (liclid) {
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
        } else if (normalisedUtmSource === 'linkedin' || normalisedUtmSource === 'linkedin.com') {
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
    } else if (isLinkedInSource()) {
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
            
            window.mixpanel.track('Referral Source Identified', trackingData);
        } else if (attempts < maxAttempts) {
            // Retry after a short delay
            setTimeout(trackReferralSource, interval);
        }
    }

    // Start tracking referral source
    trackReferralSource();
})(); 