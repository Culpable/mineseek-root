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