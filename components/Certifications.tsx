import React from 'react';
import { useRevealAnimation } from './hooks';

const certifications = [
    { name: 'ISO 9001:2015', description: 'Manajemen Mutu', text: 'ISO 9001' },
    { name: 'SBU Konstruksi', description: 'Sertifikat Badan Usaha', text: 'SBU' },
    { name: 'SKK Konstruksi', description: 'Sertifikat Kompetensi Kerja', text: 'SKK' },
    { name: 'Sistem Manajemen K3', description: 'Kesehatan & Keselamatan Kerja', text: 'SMK3' },
];

const Certifications: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();
    
    return (
        <section id="legalitas" className="py-20 blueprint-pattern-gray">
             <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center reveal ${isVisible ? 'visible' : ''}`}>
                    <h2 
                        className="text-3xl md:text-4xl font-slab font-bold text-charcoal text-center mb-4"
                    >
                        Kualitas & Legalitas
                    </h2>
                    <p 
                        className="text-center text-lg text-charcoal max-w-3xl mx-auto mb-12"
                    >
                        Kami berkomitmen pada standar kualitas internasional dan kepatuhan regulasi untuk menjamin keberhasilan setiap proyek.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {certifications.map((cert, index) => (
                        <div 
                            key={cert.name} 
                            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 reveal"
                            style={{ 
                                transitionDelay: `${index * 100}ms`, 
                                opacity: isVisible ? 1 : 0, 
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)' 
                            }}
                        >
                            <div className="h-24 w-24 mb-4 flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg">
                                <span className="text-lg font-bold text-gray-700">{cert.text}</span>
                            </div>
                            <h3 className="text-lg font-bold font-slab text-charcoal">{cert.name}</h3>
                            <p className="text-sm text-gray-700">{cert.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;