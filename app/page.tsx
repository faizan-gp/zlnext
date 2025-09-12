import HeroHome from "@/components/HeroHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free-Roam Virtual Reality Gaming Experience",
  description:
    "Free-roam VR in Webster serving Greater Houston. Up to 8 players. Zombie survival, sci-fi missions, PvP esports, and family-friendly worlds. Book now.",
  openGraph: {
    title: "Zero Latency VR Houston, Webster — Free-Roam Virtual Reality in Webster",
    description:
      "Step inside larger-than-life worlds at our free-roam VR arena in Webster. Perfect for friends, birthdays, team building & bachelor parties.",
    url: "https://zlwebster.com/",
    siteName: "Zero Latency Webster",
    // images: [{ url: "https://zlwebster.com/og-home.jpg", width: 1200, height: 630, alt: "Players in Zero Latency VR Houston" }],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "https://zlwebster.com/" },
};

const faqs = [
        { q: "Can i get motion sickness?", a: "You don't need to worry about motion sickness. Our system is built to give you a fully immersive experience without the discomfort often linked to VR. Since you're physically moving through a large space, your body naturally aligns with the virtual environment, preventing that “disoriented” feeling. Only a very small number of players have ever chosen to stop due to motion sickness." },
        { q: "How many people can play at once?", a: "Up to 8 players per game. Larger groups rotate through back-to-back sessions." },
        { q: "Is it possible to organize a celebration or a private party at Zero Latency?", a: "Yes, you'll have access to a private event room with additional activities. It's specifically designed to host birthday parties, bachelor and bachelorette celebrations, team-building sessions, and other corporate events." },
        { q: "Is it possible to play a shooter game against each other at your venue?", a: "Yes, it is! We offer a game called Sol Raiders, where players can compete in teams against each other (PvP). For the best experience, we recommend a minimum of 4 players." },
        { q: "Do you only have shooter games?", a: "No, not all of our games are shooters. Alongside action scenarios, we also offer Engineerium, an experiential game, and Singularity, a non-violent shooter. For kids, we recommend the Engineerium & Singularity package." },
        { q: "Do you accept walk-ins?", a: "Yes! We do accept walk-ins if reservation slots are available. However, during peak times it can be harder to secure a spot, so we recommend booking in advance whenever possible." }
    ];


const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: "Zero Latency Webster (Houston)",
  image: "https://zlwebster.com/og-home.jpg",
  url: "https://zlwebster.com/",
  telephone: "+1-469-404-9149",
  email: "zero@zlwebster.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    "streetAddress": "20801 Gulf Fwy suite 5",
    "addressLocality": "Webster",
    "addressRegion": "TX",
    "postalCode": "77598",
    "addressCountry": "US"
  },
  areaServed: [
    {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 29.5377,
        "longitude": -95.1183
      },
      "geoRadius": 50000
    },
    { "@type": "City", "name": "Webster" },
    { "@type": "City", "name": "League City" },
    { "@type": "City", "name": "Friendswood" },
    { "@type": "City", "name": "Nassau Bay" },
    { "@type": "City", "name": "Seabrook" },
    { "@type": "City", "name": "Kemah" },
    { "@type": "City", "name": "Clear Lake Shores" },
    { "@type": "City", "name": "El Lago" },
    { "@type": "City", "name": "Taylor Lake Village" },
    { "@type": "City", "name": "Shoreacres" },
    { "@type": "City", "name": "La Porte" },
    { "@type": "City", "name": "Pasadena" },
    { "@type": "City", "name": "South Houston" },
    { "@type": "City", "name": "Pearland" },
    { "@type": "City", "name": "Alvin" },
    { "@type": "City", "name": "Dickinson" },
    { "@type": "City", "name": "Texas City" },
    { "@type": "City", "name": "Santa Fe" },
    { "@type": "Place", "name": "Bacliff" },
    { "@type": "Place", "name": "San Leon" },

    { "@type": "AdministrativeArea", "name": "Harris County" },
    { "@type": "AdministrativeArea", "name": "Galveston County" },
    { "@type": "AdministrativeArea", "name": "Brazoria County" }
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday"], opens: "16:00", closes: "21:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday", "Thursday"], opens: "14:00", closes: "21:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday", "Sunday"], opens: "11:00", closes: "23:00" },
  ],
  sameAs: [
    "https://www.facebook.com/zerolatencywebstr",
    "https://www.instagram.com/zerolatencywebstr",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "69"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main id="main-content">
        <section className="relative">
          <HeroHome faqs={faqs}/>
        </section>
      </main>

    </>
  )
}
