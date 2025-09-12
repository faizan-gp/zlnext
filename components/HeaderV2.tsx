'use client';

import Link from 'next/link'
import Image from 'next/image'

export default function HeaderV2() {


  return (
    <header className="fixed top-0 z-50 w-full bg-[#000f1328] backdrop-blur-md pr-8 pl-8">
      <div className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/ZL-W.png"
            alt="Zero Latency Webster Logo"
            width={66}
            height={50}
            className="h-12 w-auto object-contain" // h-12 = 48px fixed height
            priority
          />
        </Link>
      </div>
    </header>
  )
}