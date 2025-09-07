// lib/env.ts
// Clean, typed helpers to extract meaningful, normalized env/device/browser data

// Ensure this file is treated as a module so global augmentations work
export {};

//
// --- Global type augmentations (no `any`) ---
//
declare global {
  interface Navigator {
    hardwareConcurrency?: number;
    deviceMemory?: number;
    connection?: {
      effectiveType?: string;
      saveData?: boolean;
    };
    userAgentData?: {
      getHighEntropyValues?: (
        hints: string[]
      ) => Promise<{
        platform?: string;
        platformVersion?: string;
        uaFullVersion?: string;
      }>;
    };
  }
}

//
// --- Public types ---
//
export type EnvParams = {
  device_type: 'Mobile' | 'Tablet' | 'Desktop';
  os_name: string;
  os_version: string;
  browser_name: string;        // e.g., "Safari", "Chrome", "FBInApp (WebView)"
  browser_version: string;
  is_webview: 'true' | 'false';
  webview_host: '' | 'instagram' | 'facebook' | 'messenger' | 'tiktok' | 'unknown';
  screen_resolution: string;   // "1170x2532"
  viewport: string;            // "390x690"
  device_pixel_ratio: string;  // "3"
  language: string;            // "en-US"
  timezone: string;            // "Asia/Kuala_Lumpur"
  hardware_concurrency: string; // "8"
  device_memory_gb: string;      // "8" (Chromium only)
  network_effective_type: string; // "4g" | "3g" | ""
  save_data: 'true' | 'false';
  touch_support: 'true' | 'false';
  // marketing/query aids
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  page_location?: string;
  page_referrer?: string;
};

//
// --- Internals ---
//
const isSSR = (): boolean => typeof window === 'undefined';

const getParam = (sp: URLSearchParams, key: string): string | undefined => {
  const v = sp.get(key);
  return v ?? undefined;
};

const getOS = (ua: string): { name: string; version: string } => {
  if (/windows nt/i.test(ua)) {
    const ver = (ua.match(/windows nt ([\d.]+)/i) || [])[1];
    const map: Record<string, string> = { '10.0': '10/11', '6.3': '8.1', '6.2': '8', '6.1': '7' };
    return { name: 'Windows', version: map[ver] || ver || 'unknown' };
  }
  if (/iphone|ipad|ipod/i.test(ua)) {
    const ver = (ua.match(/os (\d+[_.\d+]*) like mac os/i) || [])[1];
    return { name: 'iOS', version: (ver || '').replace(/_/g, '.') || 'unknown' };
  }
  if (/android/i.test(ua)) {
    const ver = (ua.match(/android\s([\d.]+)/i) || [])[1];
    return { name: 'Android', version: ver || 'unknown' };
  }
  if (/mac os x/i.test(ua)) {
    const ver = (ua.match(/mac os x (\d+[_.\d]+)/i) || [])[1];
    return { name: 'macOS', version: (ver || '').replace(/_/g, '.') || 'unknown' };
  }
  if (/linux/i.test(ua)) return { name: 'Linux', version: 'unknown' };
  return { name: 'Unknown', version: 'unknown' };
};

const isWebView = (ua: string): boolean => {
  const iOSWV = /\b(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ua);
  const androidWV = /; wv\)/i.test(ua) || (/Version\/[\d.]+ Chrome\/[\d.]+ Mobile/i.test(ua) && !/Safari/i.test(ua));
  return iOSWV || androidWV;
};

const getWebViewHost = (ua: string): EnvParams['webview_host'] => {
  if (/instagram/i.test(ua)) return 'instagram';
  if (/fbav|fb_iab|facebook/i.test(ua)) return 'facebook';
  if (/messenger/i.test(ua)) return 'messenger';
  if (/tiktok/i.test(ua)) return 'tiktok';
  return isWebView(ua) ? 'unknown' : '';
};

const getBrowser = (ua: string): { name: string; version: string } => {
  // Detect in-app first
  if (/instagram|fbav|fb_iab|facebook|messenger/i.test(ua)) return { name: 'FBInApp (WebView)', version: '' };
  if (/tiktok/i.test(ua)) return { name: 'TikTokInApp (WebView)', version: '' };

  let m: RegExpMatchArray | null;
  if ((m = ua.match(/edg\/([\d.]+)/i))) return { name: 'Edge', version: m[1] };
  if ((m = ua.match(/chrome\/([\d.]+)/i)) && !/opr|opera|edg/i.test(ua)) return { name: 'Chrome', version: m[1] };
  if ((m = ua.match(/version\/([\d.]+).*safari/i))) return { name: 'Safari', version: m[1] };
  if ((m = ua.match(/firefox\/([\d.]+)/i))) return { name: 'Firefox', version: m[1] };
  if ((m = ua.match(/opr\/([\d.]+)/i))) return { name: 'Opera', version: m[1] };
  return { name: 'Unknown', version: '' };
};

const getDeviceType = (w: number): EnvParams['device_type'] =>
  w < 768 ? 'Mobile' : w < 1024 ? 'Tablet' : 'Desktop';

//
// --- Public builders ---
//
export const buildEnvParams = (fullUrl: string, referrer?: string): EnvParams => {
  if (isSSR()) {
    // SSR-safe minimal object
    return {
      device_type: 'Desktop',
      os_name: 'Unknown',
      os_version: 'unknown',
      browser_name: 'Unknown',
      browser_version: '',
      is_webview: 'false',
      webview_host: '',
      screen_resolution: '',
      viewport: '',
      device_pixel_ratio: '1',
      language: '',
      timezone: '',
      hardware_concurrency: '',
      device_memory_gb: '',
      network_effective_type: '',
      save_data: 'false',
      touch_support: 'false',
      page_location: fullUrl,
      page_referrer: referrer,
    };
  }

  const ua = navigator.userAgent || '';
  const os = getOS(ua);
  const browser = getBrowser(ua);
  const webview = isWebView(ua);
  const webviewHost = getWebViewHost(ua);

  const origin =
    typeof window !== 'undefined' && window.location ? window.location.origin : 'https://example.com';
  const sp = new URL(fullUrl, origin).searchParams;

  const hc = navigator.hardwareConcurrency;
  const dm = navigator.deviceMemory;
  const conn = navigator.connection;

  return {
    device_type: getDeviceType(Math.max(document.documentElement.clientWidth, window.innerWidth || 0)),
    os_name: os.name,
    os_version: os.version,
    browser_name: browser.name,
    browser_version: browser.version || '',
    is_webview: String(webview) as 'true' | 'false',
    webview_host: webviewHost,
    screen_resolution: window.screen ? `${window.screen.width}x${window.screen.height}` : '',
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    device_pixel_ratio: String(window.devicePixelRatio || 1),
    language: navigator.language || (Array.isArray(navigator.languages) && navigator.languages[0]) || '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    hardware_concurrency: String(hc ?? ''),
    device_memory_gb: String(dm ?? ''),
    network_effective_type: conn?.effectiveType ?? '',
    save_data: String(conn?.saveData ?? false) as 'true' | 'false',
    touch_support: String(('ontouchstart' in window) || (navigator as Navigator & { maxTouchPoints?: number }).maxTouchPoints! > 0) as
      | 'true'
      | 'false',
    utm_source: getParam(sp, 'utm_source'),
    utm_medium: getParam(sp, 'utm_medium'),
    utm_campaign: getParam(sp, 'utm_campaign'),
    utm_content: getParam(sp, 'utm_content'),
    utm_term: getParam(sp, 'utm_term'),
    fbclid: getParam(sp, 'fbclid'),
    page_location: fullUrl,
    page_referrer: referrer,
  };
};

// Optional: upgrade with Client Hints on Chromium for nicer versions
export const enrichWithClientHints = async (
  base: EnvParams
): Promise<Partial<EnvParams>> => {
  const uad = navigator.userAgentData;
  if (!uad?.getHighEntropyValues) return {};

  try {
    const hints = await uad.getHighEntropyValues(['platform', 'platformVersion', 'uaFullVersion']);
    const updates: Partial<EnvParams> = {};
    if (typeof hints.platform === 'string' && hints.platform) {
      updates.os_name = hints.platform; // e.g., "Android", "Windows", "Chrome OS"
    }
    if (typeof hints.platformVersion === 'string' && hints.platformVersion) {
      updates.os_version = hints.platformVersion; // e.g., "10" or "14.0.0"
    }
    if (typeof hints.uaFullVersion === 'string' && hints.uaFullVersion) {
      updates.browser_version = hints.uaFullVersion;
    }
    return updates;
  } catch {
    return {};
  }
};
