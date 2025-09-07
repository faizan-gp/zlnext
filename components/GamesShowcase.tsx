// import React from 'react'

// import Container from './Container'


// const GAME_LIST = [
//   { title: 'Space Marine VR', blurb: 'Suit up. Defend against relentless waves in off‑world arenas.', href: '/games/space-marine' },
//   { title: 'Outbreak', blurb: 'Zombie apocalypse survival with heart‑pounding set‑pieces.', href: '/games/outbreak' },
//   { title: 'Far Cry VR', blurb: 'Enter the world of Far Cry — co‑op chaos on Rook Islands.', href: '/games/far-cry' },
//   { title: 'Undead Arena', blurb: 'Last‑team‑standing in a zombie‑filled gameshow.', href: '/games/undead-arena' },
//   { title: 'Singularity', blurb: 'AI gone rogue. Board a secret space station and fight back.', href: '/games/singularity' },
//   { title: 'Sol Raiders', blurb: 'PvP objective‑based competition across exotic maps.', href: '/games/sol-raiders' },
//   { title: 'Engineerium', blurb: 'Mind‑bending puzzle walk through impossible architecture.', href: '/games/engineerium' },
// ]


// export default function GamesShowcase() {
//   return (
//     <section className="section">
//       <Container>
//         <div className="mb-8 text-center">
//           <h2 className="h2">Which Games Can I Play?</h2>
//           <p className="muted mt-2">/* TODO: Add ESRB/age note, session length per title, difficulty tags */</p>
//         </div>
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {GAME_LIST.map((g) => (
//             <a key={g.title} href={g.href} className="card group block overflow-hidden">
//               <div className="aspect-video w-full bg-white/5" />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold group-hover:text-brand">{g.title}</h3>
//                 <p className="mt-1 text-sm text-gray-300">{g.blurb}</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </Container>
//     </section>
//   )
// }