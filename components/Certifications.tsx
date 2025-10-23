import React from 'react';
import { useRevealAnimation, useLanguage } from './hooks';


const Certifications: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();
    const { content } = useLanguage();

    const certifications = content.certifications;
    
    return (
        <section id="certifications" className="py-20 modern-grid-bg-gray">
             <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center reveal ${isVisible ? 'visible' : ''}`}>
                    <h2 
                        className="text-3xl md:text-4xl font-slab font-bold text-charcoal dark:text-white text-center mb-4"
                    >
                        {content.certificationsTitle}
                    </h2>
                    <p 
                        className="text-center text-lg text-charcoal dark:text-gray-300 max-w-3xl mx-auto mb-12"
                    >
                        {content.certificationsSubtitle}
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {certifications.map((cert: {name: string, description: string, text: string}, index: number) => (
                        <div 
                            key={cert.name} 
                            className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg shadow-md transition-transform duration-300 hover:scale-105 reveal"
                            style={{ 
                                transitionDelay: `${index * 100}ms`, 
                                opacity: isVisible ? 1 : 0, 
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)' 
                            }}
                        >
                            <div className="h-24 w-24 mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-600 border-2 border-dashed border-gray-300 dark:border-gray-500 rounded-lg">
                                <span className="text-lg font-bold text-gray-700 dark:text-gray-200">{cert.text}</span>
                            </div>
                            <h3 className="text-lg font-bold font-slab text-charcoal dark:text-white">{cert.name}</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{cert.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;