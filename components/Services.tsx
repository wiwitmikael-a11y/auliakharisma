import React from 'react';
import { BuildingIcon, BridgeIcon, CalculatorIcon, ClipboardListIcon } from './icons';
import { useRevealAnimation, useLanguage } from './hooks';

const Services: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();
    const { content } = useLanguage();
    
    const services = [
        {
            icon: <BuildingIcon className="h-12 w-12 text-safety-orange mb-4" />,
            title: content.service1Title,
            description: content.service1Desc
        },
        {
            icon: <BridgeIcon className="h-12 w-12 text-safety-orange mb-4" />,
            title: content.service2Title,
            description: content.service2Desc
        },
        {
            icon: <CalculatorIcon className="h-12 w-12 text-safety-orange mb-4" />,
            title: content.service3Title,
            description: content.service3Desc
        },
        {
            icon: <ClipboardListIcon className="h-12 w-12 text-safety-orange mb-4" />,
            title: content.service4Title,
            description: content.service4Desc
        }
    ];


    return (
        <section id="services" className="py-20 modern-grid-bg-gray">
            <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center reveal ${isVisible ? 'visible' : ''}`}>
                    <h2 
                        className="text-3xl md:text-4xl font-slab font-bold text-charcoal dark:text-white text-center mb-4"
                    >
                        {content.servicesTitle}
                    </h2>
                    <p 
                        className="text-center text-lg text-charcoal dark:text-gray-300 max-w-3xl mx-auto mb-12"
                    >
                        {content.servicesSubtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-safety-orange/20 transition-all duration-300 reveal"
                            style={{ 
                                transitionDelay: `${index * 100}ms`, 
                                opacity: isVisible ? 1 : 0, 
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)' 
                            }}
                        >
                            <div className="flex justify-center">{service.icon}</div>
                            <h3 className="text-xl font-bold font-slab text-charcoal dark:text-white mb-3">{service.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;