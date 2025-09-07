// import React from 'react'

// import Image from 'next/image'
// import Container from './Container'


// export default function Gallery() {
//   return (
//     <section className="section">
//       <Container>
//         <div className="mb-8 text-center">
//           <h2 className="h2">Peek Inside the Arena</h2>
//           <p className="muted mt-2">/* TODO: Replace with real photos from your Webster venue */</p>
//         </div>
//         <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//           {['/gallery-1.jpg', '/gallery-2.jpg', '/gallery-3.jpg', '/gallery-1.jpg', '/gallery-2.jpg', '/gallery-3.jpg'].map((src, i) => (
//             <div key={i} className="overflow-hidden rounded-2xl border border-white/10">
//               <Image
//                 src={src}
//                 alt={`Venue photo ${i + 1}`}
//                 width={1200}
//                 height={800}
//                 className="h-full w-full object-cover"
//                 priority={i < 2}
//                 unoptimized
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   )
// }