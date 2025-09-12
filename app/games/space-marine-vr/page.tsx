// src/app/games/space-marine-vr/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { Users, ShieldAlert, Rocket, BrainCircuit } from "lucide-react";
import BookGameButton from "@/components/BookBtn";

// Metadata remains the same
export const metadata: Metadata = {
    title: "Space Marine VR – Warhammer 40,000 Experience in Houston | Zero Latency",
    description: "See what it&apos;s like to battle Tyranid swarms in the Hive City of Fervastium. This image-rich guide shows you the weapons, tactics, and worlds of our most intense free-roam VR game.",
    // ... other metadata fields
};

// Card component with a square 1:1 aspect ratio for maximum image size
const VisualFeatureCard = ({ imgSrc, imgAlt, title, children }: { imgSrc: string, imgAlt: string, title: string, children: React.ReactNode }) => (
    <div className="relative rounded-lg overflow-hidden group border-2 border-gray-800/50 hover:border-cyan-500/70 transition-all duration-300 shadow-lg hover:shadow-cyan-900/40">

        {/* Aspect Ratio Box: 100% for a 1:1 square ratio. */}
        <div className="w-full" style={{ paddingTop: '100%' }}></div>

        {/* Content Container: Absolutely positioned to fill the space created above. */}
        <div className="absolute inset-0">
            {/* Background Image */}
            <Image
                src={imgSrc}
                alt={imgAlt}
                layout="fill"
                objectFit="cover"
                className="z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                <h3 className="text-xl font-poppins font-bold text-white mb-1 transition-colors duration-300 group-hover:text-cyan-400">{title}</h3>
                <p className="text-gray-200 leading-relaxed font-medium transition-all duration-300 opacity-90 group-hover:opacity-100 text-sm">
                    {children}
                </p>
            </div>
        </div>
    </div>
);


export default function SpaceMarinePage() {
    return (
        <main id="main-content">
            <div className="bg-[#000F13] text-gray-200 font-montserrat overflow-x-hidden">

                {/* HERO SECTION - REVISED WITH CENTERED CONTENT */}
                <section className="relative min-h-[90vh] flex items-center justify-center text-center py-20 lg:py-0">
                    <div className="absolute inset-0 z-0 opacity-10">
                         <Image 
                            src="/sci-fi.jpg"
                            alt="Futuristic sci-fi battlefield background"
                            layout="fill"
                            objectFit="cover"
                            priority
                         />
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
                        <p className="text-cyan-400 font-bold uppercase tracking-widest">A Warhammer 40,000 VR Experience</p>
                        <h1 className="text-5xl font-poppins text-white font-black sm:text-6xl md:text-7xl mt-4 leading-tight">
                            SPACE MARINE <span className="text-stroke-blue">VR</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                            Step into the boots of a genetically enhanced super-soldier. Unleash devastating firepower against the Tyranid swarm in our most intense, free-roam VR experience.
                        </p>
                        <div className="mt-10">
                            <BookGameButton label="ENLIST FOR BATTLE" source="space-marine-hero-centered" />
                        </div>
                    </div>
                </section>
                                {/* QUICK STATS / IMMERSION BAR */}
                <section className="bg-gray-900/50 border-t border-b border-gray-800">
                    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="flex flex-col items-center justify-center p-2">
                                <Rocket size={32} className="text-cyan-400 mb-2" />
                                <h3 className="text-lg font-bold font-poppins text-white">Free-Roam VR</h3>
                                <p className="text-sm text-gray-400">Unrestricted Movement</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2">
                                <Users size={32} className="text-cyan-400 mb-2" />
                                <h3 className="text-lg font-bold font-poppins text-white">Co-op Mission</h3>
                                <p className="text-sm text-gray-400">1-8 Player Squads</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2">
                                <BrainCircuit size={32} className="text-cyan-400 mb-2" />
                                <h3 className="text-lg font-bold font-poppins text-white">Warhammer 40K</h3>
                                <p className="text-sm text-gray-400">Iconic Universe</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2">
                                <ShieldAlert size={32} className="text-cyan-400 mb-2" />
                                <h3 className="text-lg font-bold font-poppins text-white">Extreme Intensity</h3>
                                <p className="text-sm text-gray-400">For VR Veterans</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VISUAL INTRODUCTION SECTION */}
                <section className="py-20 sm:py-24">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-poppins text-white font-bold sm:text-5xl">WELCOME TO THE <span className="text-stroke-blue">41ST MILLENNIUM</span></h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <VisualFeatureCard imgSrc="/become-a-marine.jpg" imgAlt="A close-up of a powerful Space Marine in full battle armor." title="BECOME a Space Marine">
                                You are a genetically enhanced super-soldier, humanity&apos;s last line of defense.
                            </VisualFeatureCard>
                            <VisualFeatureCard imgSrc="/explore-hive-city.jpg" imgAlt="The sprawling, gothic architecture of Hive City Fervastium at dusk." title="EXPLORE Hive City">
                                Your mission takes you deep into Fervastium, a war-torn, vertical metropolis.
                            </VisualFeatureCard>
                            <VisualFeatureCard imgSrc="/fight-the-swarm.jpg" imgAlt="A terrifying horde of Tyranid aliens charging towards the viewer." title="FIGHT the Tyranid Swarm">
                                Face down an all-consuming alien swarm from beyond the known galaxy.
                            </VisualFeatureCard>
                        </div>
                    </div>
                </section>

                {/* GAMEPLAY EXPERIENCE SECTION */}
                <section className="py-20 sm:py-24 bg-gray-900/50">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-96 lg:h-[32rem] rounded-xl overflow-hidden shadow-2xl border-2 border-cyan-800/50">
                                <Image src="/player-vr-weapon.jpg" alt="Space Marines aiming a futuristic rifle at an alien horde." layout="fill" objectFit="cover" />
                            </div>
                            <div className="prose prose-invert max-w-none">
                                <h2 className="text-4xl font-poppins font-bold sm:text-5xl">UNLEASH YOUR <span className="text-stroke-blue">INNER WARRIOR</span></h2>
                                <p className="mt-4 text-lg text-gray-300">
                                    Wield a wide range of iconic weapons from the Warhammer 40,000 universe. Feel the weight of each shot as you physically move through the arena, fighting off voracious swarms in epic skirmishes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TACTICAL COMBAT SYSTEMS SECTION */}
                 <section className="py-20 sm:py-24">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-poppins text-white font-bold sm:text-5xl">MASTER THE <span className="text-stroke-blue">BATTLEFIELD</span></h2>
                            <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
                                Victory demands more than firepower. It requires tactical precision and unwavering teamwork.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <VisualFeatureCard imgSrc="/revive-allies.png" imgAlt="A Space Marine character model reviving a fallen squadmate in-game." title="Revive Allies">
                                Keep your squad in the fight. Reviving fallen comrades is key to defeating the relentless alien swarms.
                            </VisualFeatureCard>
                            <VisualFeatureCard imgSrc="/deploy-tactics.png" imgAlt="An in-game screenshot of a stun grenade exploding amidst a horde of Tyranids." title="Deploy Tactics">
                                Use Stun Grenades to halt enemy assaults and create an opening for your team to seize victory.
                            </VisualFeatureCard>
                            <VisualFeatureCard imgSrc="/reset-rally-rise.png" imgAlt="A &apos;Mission Failed&apos; screen from the game, showing the squad being overrun." title="Reset, Rally, Rise">
                                If the whole team falls, the level resets. Regroup and learn from your mistakes to try again.
                            </VisualFeatureCard>
                            <VisualFeatureCard imgSrc="/stay-sharp.png" imgAlt="A first-person view in the game showing a friendly fire warning indicator." title="Stay Sharp">
                                Avoid friendly fire. One stray move can cost a comrade their life, leaving your squad exposed.
                            </VisualFeatureCard>
                        </div>
                    </div>
                 </section>

                {/* GAME MODES SECTION */}
                <section className="py-20 sm:py-24 bg-gray-900/50">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
                        <h2 className="text-4xl font-poppins text-white font-bold sm:text-5xl">CHOOSE YOUR <span className="text-stroke-blue">THREAT LEVEL</span></h2>
                        <div className="mt-16 grid lg:grid-cols-3 gap-8 items-stretch">

                            <VisualFeatureCard imgSrc="/base-mode.jpg" imgAlt="An intense but manageable firefight in Space Marine VR." title="BASE MODE">
                                The core experience. A balanced, intense fight perfect for your first deployment.
                            </VisualFeatureCard>

                            {/* Special card for Threat: Lethal */}
                            <div className="relative rounded-lg overflow-hidden group border-2 border-cyan-500 transform lg:scale-105 shadow-2xl shadow-cyan-900/50">
                                <div className="w-full" style={{ paddingTop: '100%' }}></div>
                                <div className="absolute inset-0">
                                    <Image src="/threat-lethal.png" alt="A desperate last stand against an overwhelming number of aliens." layout="fill" objectFit="cover" className="z-0 transition-transform duration-500 ease-in-out group-hover:scale-110" />
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                                        <p className="font-bold text-cyan-400 uppercase text-sm mb-1">ADVANCED CHALLENGE</p>
                                        <h3 className="text-xl font-poppins font-bold text-white mb-1 transition-colors duration-300 group-hover:text-cyan-400">THREAT: LETHAL</h3>
                                        <p className="text-gray-200 leading-relaxed font-medium transition-all duration-300 opacity-90 group-hover:opacity-100 text-sm">
                                            A brutal 30-min race against the clock. Team death restarts each level. Success is not guaranteed.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <VisualFeatureCard imgSrc="/lethal-extra.png" imgAlt="A squad of Space Marines pushing towards a final objective, looking determined." title="THREAT: LETHAL EXTRA">
                                Test your endurance. The swarm is just as tough, but 15 extra minutes might be what you need to win.
                            </VisualFeatureCard>
                        </div>
                    </div>
                </section>
                
                {/* FINAL CTA SECTION */}
                <section className="py-20 sm:py-32">
                     <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center bg-gray-900/50 p-8 rounded-lg border border-gray-800">
                             <div className="prose prose-invert max-w-none text-center lg:text-left">
                                <h2 className="text-4xl font-poppins text-white font-black sm:text-5xl">FOR THE <span className="text-stroke-blue">EMPEROR!</span></h2>
                                <p className="mt-6 text-xl leading-relaxed text-gray-200">
                                    Your duty calls. Assemble your squad, book your mission in Houston, and show the alien swarm the unwavering might of a Space Marine.
                                </p>
                                <div className="mt-8">
                                    <BookGameButton label="ACCEPT YOUR MISSION" source="space-marine-final-cta" />
                                </div>
                            </div>
                            <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
                                <Image src="/warhammer-final-cta.png" alt="A heroic, final shot of the Space Marine squad victorious." layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
