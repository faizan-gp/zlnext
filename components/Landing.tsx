import Link from 'next/link'
import YouTubeEmbed from './YoutubeEmbed'
import Image from 'next/image'

export default function Landing() {
  return (
    <div className="px-4 lg:px-8">
      <div className="h-4" />

      {/* Hero Section: stacked on mobile, side-by-side on lg */}
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* LEFT: Text */}
          <div>
            <Link
              href="https://maps.app.goo.gl/FKLFH9KyvvCFAiU89"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                <span>Webster, TX</span>
                <span className="h-1 w-1 rounded-full bg-brand" />
                <span>Zero Latency Cafe & VR Arena</span>
              </div>
            </Link>

            <h1 className="text-4xl font-poppins text-stroke-blue font-black lg:text-6xl">
              NOT JUST VIRTUAL
            </h1>
            <h1 className="text-5xl font-montserrat font-black lg:text-7xl">
              TRULY REAL
            </h1>

            <div className="h-2" />
            <p className="mt-4 font-poppins text-white lg:text-lg lg:leading-relaxed">
              Ditch the cables. No lanes. No limits. Run, dodge, and squad up across elite VR missions built for 2–8 players.
            </p>

            <Link href="https://zerolatencyvr.com/en/webster/experiences?utm_source=zlwebster&utm_medium=zlwebsite&utm_campaign=zlwebsite&utm_content=zlwebsite" className="sm:inline-flex items-center justify-center btn btn-primary rounded-xl text-lg font-poppins h-14 px-6 mr-4 leading-none mt-6"> Explore Zero Latency </Link>
          </div>

          {/* RIGHT: Video */}
          <div className="max-w-4xl lg:max-w-none ">
            <h2 className="mb-4 text-2xl font-bold font-poppins">
              Watch Our Trailer
            </h2>
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <div className="aspect-[16/9]">
                <YouTubeEmbed videoId="1_1-uJXPIRE" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20" />

      {/* Bottom Block */}
      <div>
        <h1 className="text-5xl lg:text-9xl text-center font-montserrat font-black">ZERO</h1>
        <h1 className="text-6xl lg:text-8xl text-center font-poppins text-stroke-blue font-black">
          LATENCY
        </h1>
        <Image
          src="/vr.webp"
          alt="Zero Latency Logo"
          width={400}
          height={400}
          className="mx-auto w-[50%] "
          priority
        />
      </div>
    </div>
  )
}
