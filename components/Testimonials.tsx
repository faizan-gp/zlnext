// import React from 'react'

// import Container from './Container'


// const TESTIMONIALS = [
//   { name: 'Alex G.', quote: 'Absolutely insane experience. Felt like a real sci‑fi mission!' },
//   { name: 'Priya S.', quote: 'Best team event we’ve done — everyone was buzzing for days.' },
//   { name: 'Marcus T.', quote: 'The tracking is unreal. You actually run and dodge. 10/10.' },
// ]


// export default function Testimonials() {
//   return (
//     <section className="section">
//       <Container>
//         <div className="mb-8 text-center">
//           <h2 className="h2">What Customers Say About Us</h2>
//           <p className="muted mt-2">/* TODO: Pull real Google reviews; add star ratings */</p>
//         </div>
//         <div className="grid gap-4 md:grid-cols-3">
//           {TESTIMONIALS.map((t) => (
//             <div key={t.name} className="card p-5">
//               <div className="mb-3 flex items-center gap-2">
//                 <div className="h-10 w-10 rounded-full bg-white/10" />
//                 <div>
//                   <p className="font-medium">{t.name}</p>
//                   <p className="text-xs text-gray-400">Verified Guest</p>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-200">“{t.quote}”</p>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   )
// }