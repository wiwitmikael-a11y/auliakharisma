import React from 'react';
import { useRevealAnimation } from './hooks';

// --- SVG Logos for better quality and professionalism ---
const PuprLogo = () => <svg className="h-16 w-auto" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="12" fill="#4A5568" textAnchor="middle" dominantBaseline="middle">Kementerian PUPR</text></svg>;
const WaskitaLogo = () => <svg className="h-16 w-auto" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="12" fill="#4A5568" textAnchor="middle" dominantBaseline="middle">Waskita Karya</text></svg>;
const SummareconLogo = () => <svg className="h-16 w-auto" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="12" fill="#4A5568" textAnchor="middle" dominantBaseline="middle">Summarecon</text></svg>;
const ModernlandLogo = () => <svg className="h-16 w-auto" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="12" fill="#4A5568" textAnchor="middle" dominantBaseline="middle">Modernland</text></svg>;
const PemprovJabarLogo = () => <svg className="h-16 w-auto" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="12" fill="#4A5568" textAnchor="middle" dominantBaseline="middle">Pemprov Jabar</text></svg>;
const DinasPuLogo = () => <svg className="h-16 w-auto" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="12" fill="#4A5568" textAnchor="middle" dominantBaseline="middle">Dinas PU</text></svg>;

const clients = [
    { name: 'Kementerian PUPR', logo: <PuprLogo /> },
    { name: 'Waskita Karya', logo: <WaskitaLogo /> },
    { name: 'Summarecon', logo: <SummareconLogo /> },
    { name: 'Modernland', logo: <ModernlandLogo /> },
    { name: 'Pemprov Jabar', logo: <PemprovJabarLogo /> },
    { name: 'Dinas PU', logo: <DinasPuLogo /> },
];

const Clients: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();

    return (
        <section id="klien" className="py-20 modern-grid-bg-light">
            <div ref={ref as React.RefObject<HTMLDivElement>} className={`container mx-auto px-4 sm:px-6 lg:px-8 reveal ${isVisible ? 'visible' : ''}`}>
                <div className="text-center">
                    <h2 
                        className="text-3xl md:text-4xl font-slab font-bold text-charcoal text-center mb-4"
                    >
                        Klien & Rekanan
                    </h2>
                    <p 
                        className="text-center text-lg text-charcoal max-w-3xl mx-auto mb-12"
                    >
                        Dipercaya oleh berbagai institusi pemerintah dan perusahaan swasta terkemuka.
                    </p>
                </div>
                <div className="logo-scroller relative overflow-hidden">
                    <div className="flex w-max animate-scroll gap-16">
                        {/* Render logos twice for a seamless loop */}
                        {[...clients, ...clients].map((client, index) => (
                            <div 
                                key={`${client.name}-${index}`} 
                                className="flex-shrink-0 w-64 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                                aria-hidden={index >= clients.length}
                            >
                                 {client.logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;