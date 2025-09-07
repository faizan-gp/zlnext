// import React from 'react'

// import Container from './Container'


// const MODES = [
//   { title: 'Duo', players: '2 players', price: '$$ – $$', desc: 'Quick mission with a friend.' },
//   { title: 'Squad', players: '3–4 players', price: '$$ – $$', desc: 'Best balance of chaos and comms.' },
//   { title: 'Fireteam', players: '5–6 players', price: '$$ – $$', desc: 'Turn it up. Perfect for parties.' },
//   { title: 'Full Arena', players: '7–8 players', price: '$$ – $$', desc: 'Maximum mayhem. Book ahead.' },
// ]


// export default function TeamPricing() {
//   return (
//     <section id="pricing" className="section">
//       <Container>
//         <div className="mb-8 text-center">
//           <h2 className="h2">Team Modes & Pricing</h2>
//           <p className="muted mt-2">/* TODO: Add your exact price table, taxes, and session length details */</p>
//         </div>
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {MODES.map((m) => (
//             <div key={m.title} className="card p-5">
//               <h3 className="text-xl font-semibold">{m.title}</h3>
//               <p className="mt-1 text-sm text-gray-400">{m.players}</p>
//               <p className="mt-4 text-2xl font-bold text-brand">{m.price}</p>
//               <p className="mt-2 text-sm text-gray-300">{m.desc}</p>
//               <a href="#" className="mt-4 inline-block text-sm text-brand underline underline-offset-4">View details</a>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   )
// }