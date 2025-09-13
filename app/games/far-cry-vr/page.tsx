// src/app/games/far-cry-vr/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookGameButton from "@/components/BookBtn";
import { Drama, Flame, Palmtree, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Far Cry VR: Dive Into Insanity | Zero Latency VR Houston, Webster",
  description:
    "Enter the world of Far Cry® 3 in an exclusive VR adventure only at Zero Latency VR Houston, Webster. Far Cry VR: Dive Into Insanity thrusts up to 8 players onto a dangerous tropical island ruled by the infamous Vaas. Fight for survival through lush jungles and deranged warlords in this 30-minute free-roam VR shooter. A must for Far Cry fans and thrill-seekers alike – book your Far Cry VR experience in Houston now!",
  alternates: {
    canonical: "https://zlwebster.com/games/far-cry-vr",
  },
  openGraph: {
    title: "Far Cry VR: Dive Into Insanity | Zero Latency VR Houston, Webster",
    description:
      "Team up and fight your way off Vaas’s island in a 30-minute Far Cry® 3 free-roam VR adventure for up to 8 players.",
    url: "https://zlwebster.com/games/far-cry-vr",
    type: "website",
    images: [
      {
        url: "https://zlwebster.com/OG.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt:
          "Far Cry VR: Dive Into Insanity — players on a tropical island facing pirates with VR rifles.",
      },
    ],
  },
};

// Card with 16:9 media, text below image
const VisualFeatureCard = ({
  imgSrc,
  imgAlt,
  title,
  children,
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-lg overflow-hidden group border-2 border-gray-800/50 bg-gray-900/50 flex flex-col transition-all duration-300 hover:border-cyan-500/70 hover:shadow-2xl hover:shadow-cyan-900/40">
    <div className="relative w-full">
      <div style={{ paddingTop: "56.25%" }} />
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          alt={imgAlt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
          priority
        />
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-poppins font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{children}</p>
    </div>
  </div>
);

export default function FarCryVRPage() {
  return (
    <main id="main-content">
      <div className="bg-[#000F13] text-gray-200 font-montserrat overflow-x-hidden">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center text-center py-20 lg:py-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="/far-cry-hero-bg.webp"
              alt="Moonlit jungle and shoreline of a dangerous tropical island."
              layout="fill"
              objectFit="cover"
              className="opacity-25"
              priority
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
            <h1 className="text-5xl font-poppins text-white font-black sm:text-6xl md:text-7xl mt-4 leading-tight">
              Far Cry VR<br /> <span className="text-stroke-blue">Dive Into Insanity</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              An exclusive free-roam VR adventure set in the world of Far Cry® 3. Up to 8 players. One island.
              Survive Vaas and his pirates… and get off the island alive.
            </p>
            <div className="mt-10">
              <BookGameButton label="BOOK FAR CRY VR" source="far-cry-hero" />
            </div>
          </div>
        </section>

        <section className="bg-gray-900/50 border-t border-b border-gray-800">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center justify-center p-2">
                <Drama size={32} className="text-cyan-400 mb-2" />
                <h3 className="text-lg font-bold font-poppins text-white">Iconic Villain</h3>
                <p className="text-sm text-gray-400">Face Vaas Montenegro</p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <Users size={32} className="text-cyan-400 mb-2" />
                <h3 className="text-lg font-bold font-poppins text-white">Co-op Adventure</h3>
                <p className="text-sm text-gray-400">2-Player Experience</p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <Palmtree size={32} className="text-cyan-400 mb-2" />
                <h3 className="text-lg font-bold font-poppins text-white">Tropical Open-World</h3>
                <p className="text-sm text-gray-400">Explore the Rook Islands</p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <Flame size={32} className="text-cyan-400 mb-2" />
                <h3 className="text-lg font-bold font-poppins text-white">Intense Action</h3>
                <p className="text-sm text-gray-400">Stealth & All-Out Combat</p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO / STORY */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins text-white font-bold sm:text-5xl">
                EXCLUSIVE <span className="text-stroke-blue">FREE-ROAM ADVENTURE</span>
              </h2>
            </div>

            <div className="space-y-8">
              <VisualFeatureCard
                imgSrc="/far-cry-intro.webp"
                imgAlt="A squad of players moving through a lush tropical jungle with pirate outposts ahead."
                title="Enter the World of Far Cry® 3"
              >
                Far Cry VR: Dive Into Insanity brings Ubisoft’s iconic Far Cry® 3 universe to life in
                room-scale free-roam VR. You and your team are captured on a remote tropical island by the
                ruthless warlord <strong>Vaas Montenegro</strong>. To escape, you’ll fight through his
                henchmen, navigate treacherous jungle paths, and survive the island’s many deadly surprises.
                This exclusive Zero Latency experience delivers about 30 minutes of cinematic action you
                can’t get at home.
              </VisualFeatureCard>

              <div className="grid md:grid-cols-2 gap-8">
                <VisualFeatureCard
                  imgSrc="/far-cry-vaas.webp"
                  imgAlt="The menacing silhouette of Vaas and his pirates at a jungle outpost."
                  title="Face Vaas"
                >
                  Fans will recognize the franchise’s chaotic energy. Expect taunts, ambushes, and close-quarters
                  firefights as Vaas’s pirates hunt you for sport. Keep your cool and move as a unit—this island
                  rewards teamwork.
                </VisualFeatureCard>

                <VisualFeatureCard
                  imgSrc="/far-cry-jungle.webp"
                  imgAlt="Players sneaking through dense foliage toward a coastal village."
                  title="Rook Islands, Reimagined"
                >
                  Explore lush jungles, cliffside paths, caves glowing with strange fungi, and coastal
                  strongholds. The VR scale and detail sell the fantasy—you’ll swear you can feel the ocean air
                  and jungle heat.
                </VisualFeatureCard>
              </div>
            </div>
          </div>
        </section>

        {/* GAMEPLAY MOMENTS */}
        <section className="py-20 sm:py-24 bg-gray-900/50 space-y-20">
          {/* Co-op & Arsenal */}
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
                <Image
                  src="/far-cry-coop.webp"
                  alt="Up to eight players coordinating in a firefight against pirates."
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="prose prose-invert max-w-none">
                <h3 className="text-3xl font-poppins font-bold text-white">
                  CO-OP <span className="text-stroke-blue">FIRETEAM (1–8 PLAYERS)</span>
                </h3>
                <p className="mt-4 text-lg text-gray-300">
                  Far Cry VR is built for squads. Communicate, call targets, and revive your friends to keep the
                  momentum. Wield VR versions of classic Far Cry-style firearms—assault rifles, sidearms, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Caves & Mind Games */}
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-invert max-w-none lg:order-last">
                <h3 className="text-3xl font-poppins font-bold text-white">
                  SHORTCUTS <span className="text-stroke-blue">THROUGH THE CAVES</span>
                </h3>
                <p className="mt-4 text-lg text-gray-300">
                  Take a risky detour through bioluminescent caverns. The path is shorter—but the strange
                  mushrooms and tight spaces can play tricks on your senses. Stay close and watch your corners.
                </p>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
                <Image
                  src="/far-cry-caves.webp"
                  alt="Glowing mushrooms light a narrow cave passage as players advance."
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Jungle Showdown */}
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
                <Image
                  src="/far-cry-showdown.webp"
                  alt="A furious firefight in the heart of the jungle near ancient ruins."
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="prose prose-invert max-w-none">
                <h3 className="text-3xl font-poppins font-bold text-white">
                  UNCAGE <span className="text-stroke-blue">PRIMAL INSTINCTS</span>
                </h3>
                <p className="mt-4 text-lg text-gray-300">
                  The deeper you go, the tougher it gets. Hold gondolas against pirate assaults, push through
                  ruins, and dig deep for an epic fight in the jungle’s heart. Keep moving—Vaas doesn’t play fair.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TACTICAL FEATURES */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins text-white font-bold sm:text-5xl">
                WHY FAR CRY VR <span className="text-stroke-blue">HITS DIFFERENT</span>
              </h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
                This isn’t a stationary arcade booth. Free-roam means you physically walk, turn, and explore a
                warehouse-scale map with your team—true Far Cry energy in VR.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <VisualFeatureCard
                imgSrc="/far-cry-team.webp"
                imgAlt="Team of friends in VR gear strategizing before a mission."
                title="Built for Groups"
              >
                Perfect for squads of friends, birthdays, bachelor/ette parties, and team-building. Far Cry fans
                will love the references; newcomers will love the cinematic action.
              </VisualFeatureCard>

              <VisualFeatureCard
                imgSrc="/far-cry-weapons.webp"
                imgAlt="Close-up of VR rifles and sidearms inspired by Far Cry."
                title="Weapons & Upgrades"
              >
                Handle responsive VR firearms that feel great to aim and fire. Ammo management, target priority,
                and positioning all matter when pirates attack from every angle.
              </VisualFeatureCard>

              <VisualFeatureCard
                imgSrc="/far-cry-immersion.webp"
                imgAlt="Sunlight cutting through jungle canopy; particles and foliage all around."
                title="30 Minutes of Total Immersion"
              >
                Expect around thirty minutes of non-stop movement, firefights, and story beats. Spatial audio and
                environmental effects complete the illusion of Rook Islands.
              </VisualFeatureCard>

              <VisualFeatureCard
                imgSrc="/far-cry-ubisoft.webp"
                imgAlt="Zero Latency x Ubisoft branding for the Far Cry VR collaboration."
                title="Official Ubisoft Collaboration"
              >
                Far Cry VR: Dive Into Insanity is an official Ubisoft experience created for Zero Latency’s
                free-roam arenas. It’s a premium, location-based adventure you won’t find on at-home headsets.
              </VisualFeatureCard>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-32 sm:py-40 text-center bg-gray-900/50">
          <div className="absolute inset-0 z-0">
            <Image
              src="/far-cry-final.webp"
              alt="Players racing toward the shoreline as pirates close in."
              layout="fill"
              objectFit="cover"
              className="opacity-25"
              priority
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-4xl font-poppins text-white font-black sm:text-5xl">
              READY TO <span className="text-stroke-blue">FACE VAAS?</span>
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-gray-200">
              Gather your squad and fight your way off the island. Book Far Cry VR in Houston today—this is a
              one-of-a-kind adventure.
            </p>
            <div className="mt-8">
              <BookGameButton label="BOOK FAR CRY VR" source="far-cry-final-cta" />
            </div>
            <p className="mt-6 text-gray-300">
              Prefer sci-fi? Try our high-intensity shooter{" "}
              <Link href="/games/singularity" className="font-bold text-cyan-400 hover:underline">
                Singularity
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
