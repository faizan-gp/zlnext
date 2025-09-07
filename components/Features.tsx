// import Container from './Container'


// const FEATURES = [
//   {
//     title: 'No Limitations',
//     desc: 'Roam a full arena with 1:1 motion. No wires. No pods. Just pure freedom.',
//   },
//   {
//     title: 'Perfect Illusion',
//     desc: 'Top‑tier tracking + haptics to blur the line between game and reality.',
//   },
//   {
//     title: 'Exclusive Games',
//     desc: 'Play cinematic experiences you won’t find at home or in arcades.',
//   },
//   {
//     title: 'Multiplayer',
//     desc: 'Squad up with friends or coworkers — built for 2–8 players per session.',
//   },
// ]


// export default function Features() {
//   return (
//     <section className="section">
//       <Container>
//         <div className="mb-8 flex items-center justify-between">
//           <h2 className="h2">Why Free‑Roam VR?</h2>
//           <span className="badge">Zero Latency Advantage</span>
//         </div>
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {FEATURES.map((f) => (
//             <div key={f.title} className="card p-5">
//               <div className="mb-2 h-10 w-10 rounded-lg bg-brand/20" />
//               <h3 className="text-lg font-semibold">{f.title}</h3>
//               <p className="mt-1 text-sm text-gray-300">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   )
// }