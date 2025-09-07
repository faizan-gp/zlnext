// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';

// type Props = {
//   title?: string;
//   highlight?: string;         // e.g., "20% discount"
//   description?: string;       // rest of the text
//   code?: string;              // e.g., "HappyMonday"
//   ctaLabel?: string;          // e.g., "I WANT THE OFFER"
//   onCta?: () => void;
//   imageSrc: string;           // character PNG with transparent bg
//   className?: string;
// };

// export default function PromoCard({
//   title = 'HAPPY MONDAY',
//   highlight = '20% discount',
//   description = 'on all Monday Zero Latency orders',
//   code = 'HappyMonday',
//   ctaLabel = 'I WANT THE OFFER',
//   onCta,
//   imageSrc,
//   className = '',
// }: Props) {
//   const [copied, setCopied] = useState<boolean>(false);

//   const copy = async () => {
//     try {
//       await navigator.clipboard.writeText(code);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1200);
//     } catch {}
//   };

//   return (
//     <div
//       className={`relative isolate overflow-hidden rounded-[32px]
//                   bg-[#0b0f1a]/90 text-white shadow-2xl
//                   ring-1 ring-white/10 backdrop-blur
//                   ${className}`}
//     >
//       {/* Decorative background pattern */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 rounded-[32px] 
//                    [background:radial-gradient(1200px_200px_at_70%_10%,#5b21b6_0%,transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_60%)]"
//       />
//       {/* subtle repeated word BG (optional) */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
//         style={{
//           backgroundImage:
//             'repeating-linear-gradient(0deg, transparent, transparent 34px, rgba(255,255,255,0.06) 34px, rgba(255,255,255,0.06) 35px)',
//         }}
//       />

//       <div className="relative grid grid-cols-1 gap-8 p-6 sm:p-8 md:grid-cols-12 md:gap-6">
//         {/* Left image */}
//         <div className="relative md:col-span-5 lg:col-span-5">
//           <div className="relative -mx-6 -mt-10 md:mx-0 md:mt-0 h-[280px] md:h-[360px] lg:h-[420px]">
//             <Image
//               src={imageSrc}
//               alt=""
//               fill
//               className="object-contain object-left md:object-center"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right content */}
//         <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center">
//           <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
//             {title}
//           </h3>

//           <p className="mt-4 text-lg leading-7 text-white/90">
//             <span className="font-extrabold text-white">{highlight}</span>{' '}
//             {description}
//           </p>

//           {/* Code pill */}
//           <div className="mt-6 flex items-center gap-3 text-base">
//             <span className="text-white/80">Use the code:</span>

//             <div
//               className="flex items-center overflow-hidden rounded-full
//                          bg-white/10 ring-1 ring-white/10 backdrop-blur"
//             >
//               <span className="px-4 py-2 text-white/95 font-semibold">
//                 {code}
//               </span>
//               <button
//                 onClick={copy}
//                 className="grid h-10 w-12 place-items-center bg-indigo-600 hover:bg-indigo-500
//                            transition-colors"
//                 aria-label="Copy discount code"
//                 type="button"
//               >
//                 {/* clipboard icon */}
//                 <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
//                   <path d="M9 3h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a2 2 0 0 1 2-2Z" stroke="white" strokeWidth="1.5"/>
//                   <rect x="8" y="2" width="8" height="4" rx="1.4" fill="white" opacity=".15"/>
//                 </svg>
//               </button>
//             </div>

//             <span className={`ml-1 text-sm ${copied ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
//               Copied!
//             </span>
//           </div>

//           {/* CTA */}
//           <div className="mt-7">
//             <button
//               type="button"
//               onClick={onCta}
//               className="w-full sm:w-auto rounded-full px-8 py-4 text-sm font-bold
//                          bg-gradient-to-r from-indigo-500 to-violet-500
//                          shadow-lg shadow-indigo-700/20
//                          hover:from-indigo-400 hover:to-violet-400
//                          active:scale-[0.99] transition"
//             >
//               {ctaLabel}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }