'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initMixpanel, trackPageView } from '@/lib/mixpanelClient';

/**
 * Client component that initializes Mixpanel with Session Replay
 * Must be wrapped with 'use client' since it uses React hooks
 * Handles page view tracking for client-side navigation
 */
export default function MixpanelProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize Mixpanel once on component mount
  useEffect(() => {
    console.log('Initializing Mixpanel with Session Replay...');
    initMixpanel();
  }, []);

  // Track page views whenever the URL changes
  useEffect(() => {
    if (pathname) {
      const url = searchParams.size > 0 
        ? `${pathname}?${searchParams.toString()}` 
        : pathname;
      
      trackPageView(url);
    }
  }, [pathname, searchParams]);

  // This component doesn't render anything
  return null;
} 