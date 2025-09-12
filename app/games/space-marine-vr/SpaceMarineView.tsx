// src/app/games/space-marine-vr/SpaceMarineView.tsx

import Image from 'next/image';
import { Users, Clock, ShieldAlert } from 'lucide-react';
import BookGameButton from '@/components/BookBtn';

export default function SpaceMarineView() {
  return (
    <main id="main-content">
      <div className="bg-black text-white font-montserrat">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen grid lg:grid-cols-2 items-center">
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                <p className="font-semibold text-cyan-400 uppercase tracking-widest">
                    Warhammer 40,000
                </p>
                <h1 className="font-poppins text-6xl sm:text-8xl lg:text-9xl font-black uppercase text-white leading-none">
                    Space Marine<span className="text-stroke-cyan"> VR</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-md">
                    In the grim darkness of the far future, there is only war.
                </p>

                <div className="mt-10 border-t border-gray-800 pt-6 space-y-4 text-lg">
                     <div className="flex items-center gap-4"><Users className="h-6 w-6 text-cyan-400" /><span>1 - 8 Players (Co-op)</span></div>
                     <div className="flex items-center gap-4"><Clock className="h-6 w-6 text-cyan-400" /><span>~30 Minute Mission</span></div>
                     <div className="flex items-center gap-4"><ShieldAlert className="h-6 w-6 text-red-500" /><span className="text-red-400">Extreme Difficulty</span></div>
                </div>
            </div>

            <div className="relative h-96 lg:h-screen w-full">
                 <Image
                    src="https://placehold.co/1000x1600/000f13/00BCD4?text=Space+Marine"
                    alt="An elite Space Marine warrior ready for battle."
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </section>

        {/* --- A FIERCE THREAT SECTION --- */}
        <section className="relative py-20 sm:py-32 bg-[#0a0a0a]">
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://placehold.co/1920x1080/000f13/00BCD4?text=Hive+City"
                    alt="A sprawling, dark Hive City."
                    layout="fill"
                    objectFit="cover"
                    className="opacity-10"
                />
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                    <h2 className="font-poppins text-5xl sm:text-7xl font-black uppercase">
                        A FIERCE <span className="text-stroke-blue">THREAT</span>
                    </h2>
                </div>
                <div className="bg-black/50 backdrop-blur-sm border border-gray-800 p-8 rounded-lg">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        You are a Space Marine—a genetically enhanced super-soldier, a highly disciplined and indomitable warrior. In the expansive <span className="text-white font-semibold">Hive City of Fervastium</span>, you will delve deep into a vault on a vital mission.
                    </p>
                    <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                        If successful, you could turn the tide and beat back the <span className="text-white font-semibold">Tyranids</span>, an all-consuming alien swarm from beyond the known galaxy.
                    </p>
                </div>
            </div>
        </section>

        {/* --- UNLEASH YOUR INNER WARRIOR SECTION --- */}
        <section className="py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-2 gap-4">
                    <Image src="https://placehold.co/600x800/000f13/00BCD4?text=Action+1" alt="A Space Marine firing their weapon" width={600} height={800} className="rounded-lg object-cover w-full h-full" />
                    <Image src="https://placehold.co/600x800/000f13/00BCD4?text=Action+2" alt="An alien Tyranid creature" width={600} height={800} className="rounded-lg object-cover w-full h-full mt-12" />
                </div>
                <div className="max-w-xl lg:ml-auto">
                    <h2 className="font-poppins text-5xl sm:text-7xl font-black uppercase">
                        UNLEASH YOUR <span className="text-stroke-blue">INNER WARRIOR</span>
                    </h2>
                    <p className="mt-8 text-lg text-gray-300 leading-relaxed">
                        The enemy is relentless. There is no peace. No respite. No forgiveness. Using a wide range of iconic weapons from the Warhammer 40,000 universe, you&apos;ll fight off voracious swarms of Tyranids in epic skirmishes against overwhelming odds.
                    </p>
                </div>
            </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="bg-cyan-500 text-black py-20 sm:py-24">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="font-poppins text-4xl sm:text-6xl font-black uppercase">
                   Your Mission Begins Now
                </h2>
                <p className="mt-4 text-lg text-black/80 max-w-2xl mx-auto">
                    Ready to face the alien onslaught? Book your Space Marine mission at our Houston location and see if your squad survives.
                </p>
                <div className="mt-8">
                     {/* A special button style to stand out on the light background */}
                     <BookGameButton 
                        label="ENLIST YOUR SQUAD" 
                        source="space-marine-cta"
                        className="btn-primary bg-black text-white border-black hover:bg-gray-800"
                    />
                </div>
                <p className="mt-4 text-sm text-black/70">(Recommended for ages 15+ due to combat intensity)</p>
            </div>
        </section>
      </div>
    </main>
  );
}