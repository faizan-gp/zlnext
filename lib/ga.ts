// lib/ga.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

type GtagFn = (
  command: 'event',
  action: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export const pageview = (url: string): void => {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', { page_location: url });
};

export const track = (
  name: string,
  params: Record<string, unknown> = {}
): void => {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
};
