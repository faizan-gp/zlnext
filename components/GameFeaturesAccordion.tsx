'use client'; // This marks the component for client-side interactivity

import { useState } from 'react';
import { Users, AlertTriangle, Shield, PlusCircle, MinusCircle } from "lucide-react";

// The data for the features can live directly inside this component
const gameFeatures = [
    {
        title: "Unforgiving Co-Op Combat",
        description: "Your squad's survival depends on flawless teamwork. If a teammate goes down, others can revive them, but if the whole team falls, you reset to the beginning of the level. Communication is key to conquering the relentless alien threat.",
        icon: Users,
    },
    {
        title: "Advanced Threat Level: Lethal",
        description: "Designed for VR veterans and those seeking the ultimate challenge. Space Marine VR offers a 'Lethal' difficulty mode that will push your reflexes, strategy, and courage to their absolute limits. Prepare for an extreme test.",
        icon: AlertTriangle,
    },
    {
        title: "Immersive Sci-Fi Warfare",
        description: "Wield futuristic weaponry and move freely through sprawling space station environments and alien-infested corridors. Every physical step you take is mirrored in the game, creating unparalleled immersion without wires or limits.",
        icon: Shield,
    },
];

export default function GameFeaturesAccordion() {
    const [openFeature, setOpenFeature] = useState<number | null>(0); // Default to first item open

    const toggleFeature = (index: number) => {
        setOpenFeature(openFeature === index ? null : index);
    };

    return (
        <div className="mt-10 space-y-4">
            {gameFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div key={index} className="rounded-lg bg-gray-800/50 border border-gray-700 overflow-hidden">
                        <button
                            className="flex w-full items-center justify-between p-5 text-left text-white font-bold text-xl"
                            onClick={() => toggleFeature(index)}
                        >
                            <span className="flex items-center">
                                <Icon className="h-6 w-6 mr-3 text-cyan-400 flex-shrink-0" />
                                {feature.title}
                            </span>
                            {openFeature === index ? <MinusCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" /> : <PlusCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />}
                        </button>
                        {openFeature === index && (
                            <div className="px-5 pb-5 text-gray-300 transition-all duration-300 ease-in-out">
                                <p>{feature.description}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}