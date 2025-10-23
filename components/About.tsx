import React from 'react';
import { useRevealAnimation, useLanguage } from './hooks';
import { SealCheckIcon, HandshakeIcon, ShieldCheckIcon } from './icons';

const About: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();
    const { content } = useLanguage();
    
    const values = [
        { 
            icon: <SealCheckIcon className="h-10 w-10 text-safety-orange" />,
            title: content.value1Title, 
            description: content.value1Desc
        },
        { 
            icon: <HandshakeIcon className="h-10 w-10 text-safety-orange" />,
            title: content.value2Title, 
            description: content.value2Desc
        },
        { 
            icon: <ShieldCheckIcon className="h-10 w-10 text-safety-orange" />,
            title: content.value3Title, 
            description: content.value3Desc
        }
    ];

    return (
        <section id="about-us" className="py-20 modern-grid-bg-light">
            <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center reveal ${isVisible ? 'visible' : ''}`}>
                    <h2 
                        className="text-3xl md:text-4xl font-slab font-bold text-charcoal dark:text-white text-center mb-4"
                    >
                        {content.aboutTitle}
                    </h2>
                    <p 
                        className="text-center text-lg text-charcoal dark:text-gray-300 max-w-3xl mx-auto mb-12"
                    >
                        {content.aboutParagraph}
                    </p>
                </div>
                
                <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center`}>
                    {values.map((value, index) => (
                        <div 
                            key={index} 
                            className={`p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm reveal ${isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${200 + index * 150}ms` }}
                        >
                             <div className="flex justify-center mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold font-slab text-charcoal dark:text-white mb-3">{value.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;