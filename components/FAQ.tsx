'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqProps } from './HeroHome';


export default function FAQ({ faqs }: FaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);


    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-poppins font-black text-white"><span className='text-stroke-blue'>Frequently</span> Asked Questions</h2>
            </div>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-2 border-gray-700 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center p-5 text-left font-semibold text-white text-lg"
                        >
                            <span>{faq.q}</span>
                            <ChevronDown className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                            <div className="px-5 pb-5 text-gray-300">
                                {faq.a}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

