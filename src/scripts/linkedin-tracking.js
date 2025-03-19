/**
 * LinkedIn Tracking Script
 * This file contains the LinkedIn tracking script for conversion tracking
 * and remarketing functionality across the site.
 */

export const linkedinTrackingScript = {
  script: `
    _linkedin_partner_id = "8178713";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    
    (function(l) {
    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[]}
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);})(window.lintrk);
  `,
  noscriptImg: "https://px.ads.linkedin.com/collect/?pid=8178713&fmt=gif"
}; 