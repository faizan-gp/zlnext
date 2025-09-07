'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview, track } from '@/lib/ga';

export default function AnalyticsClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    pageview(url);
    track('zlwebster', { page_location: url });
    // Meta Pixel PageView auto-fires on load; optional to fire again:
    // fbq('track', 'PageView');
  }, [pathname, searchParams]);

  return null;
}