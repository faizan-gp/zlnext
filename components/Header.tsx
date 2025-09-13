'use client';

import Link from 'next/link'
import { BOOKING_URL } from '@/lib/navData'
import Image from 'next/image'
import { track } from '@/lib/ga';
import { fbqTrack } from '@/lib/meta';

export default function Header() {

  const handleClick = () => {
    // Fire GA4 event
    track('zl_bn_header', { link_url: BOOKING_URL });
    // Fire Meta Pixel event
    fbqTrack('zl_bn_header', { value: 0, currency: 'USD' });
    setTimeout(() => {
      window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
    }, 200);
  };


  return (
    <header className="sticky top-0 z-50 w-full bg-[#000f1328] backdrop-blur-md pr-8 pl-8">
      <div className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/ZL-W.webp"
            alt="Zero Latency Webster Logo"
            width={66}
            height={50}
            className="h-12 w-auto object-contain" // h-12 = 48px fixed height
            priority
          />

        </Link>
        <button
          onClick={handleClick}
          rel="noopener noreferrer"
          className="btn btn-outline rounded-2xl border-[#00bcd4]"
        >BOOK A GAME</button>
      </div>
    </header>
  )
}