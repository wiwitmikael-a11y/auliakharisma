import React from 'react';
import { useRevealAnimation } from './hooks';

const clients = [
    { name: 'Kementerian PUPR', logoUrl: 'https://placehold.co/150x60/F3F4F6/9CA3AF?text=Kementerian+PUPR' },
    { name: 'Waskita Karya', logoUrl: 'https://placehold.co/150x60/F3F4F6/9CA3AF?text=Waskita+Karya' },
    { name: 'Summarecon', logoUrl: 'https://placehold.co/150x60/F3F4F6/9CA3AF?text=Summarecon' },
    { name: 'Modernland', logoUrl: 'https://placehold.co/150x60/F3F4F6/9CA3AF?text=Modernland' },
    { name: 'Pemprov Jabar', logoUrl: 'https://placehold.co/150x60/F3F4F6/9CA3AF?text=Pemprov+Jabar' },
    { name: 'Dinas PU', logoUrl: 'https://placehold.co/150x60/F3F4F6/9CA3AF?text=Dinas+PU' },
];

const Clients: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();

    return (
        <section id="klien" className="py-20 bg-white">
            <div ref={ref as React.RefObject<HTMLDivElement>} className={`container mx-auto px-4 sm:px-6 lg:px-8 reveal ${isVisible ? 'visible' : ''}`}>
                <div className="text-center">
                    <h2 className="section-title">Klien & Rekanan</h2>
                    <p className="section-subtitle">
                        Dipercaya oleh berbagai institusi pemerintah dan perusahaan swasta terkemuka.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {clients.map((client, index) => (
                        <a 
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label={`Logo ${client.name}`}
                            key={client.name} 
                            className="w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 reveal"
                            style={{ 
                                transitionDelay: `${index * 100}ms`, 
                                opacity: isVisible ? 1 : 0, 
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)' 
                            }}
                        >
                             <img src={client.logoUrl} alt={client.name} className="h-12 object-contain" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;