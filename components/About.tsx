import React from 'react';
import { useRevealAnimation } from './hooks';
import { SealCheckIcon, HandshakeIcon, ShieldCheckIcon } from './icons';

const About: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();

    const values = [
        { 
            icon: <SealCheckIcon className="h-10 w-10 text-safety-orange" />,
            title: 'Kualitas Tanpa Kompromi', 
            description: 'Kami berkomitmen menggunakan material terbaik dan menerapkan standar pengerjaan presisi untuk hasil yang tahan lama dan memuaskan.' 
        },
        { 
            icon: <HandshakeIcon className="h-10 w-10 text-safety-orange" />,
            title: 'Integritas & Transparansi', 
            description: 'Membangun kepercayaan melalui komunikasi yang jujur dan transparansi penuh dalam setiap proses, mulai dari penawaran hingga serah terima.' 
        },
        { 
            icon: <ShieldCheckIcon className="h-10 w-10 text-safety-orange" />,
            title: 'Keamanan sebagai Prioritas', 
            description: 'Menerapkan standar K3 (Keselamatan dan Kesehatan Kerja) yang ketat untuk melindungi semua pihak yang terlibat dalam proyek.' 
        }
    ];

    return (
        <section id="tentang-kami" className="py-20 blueprint-pattern-light">
            <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center reveal ${isVisible ? 'visible' : ''}`}>
                    <h2 
                        className="text-3xl md:text-4xl font-slab font-bold text-charcoal text-center mb-4"
                    >
                        Mitra Konstruksi Profesional Anda
                    </h2>
                    <p 
                        className="text-center text-lg text-charcoal max-w-3xl mx-auto mb-12"
                    >
                        Dengan lebih dari 8 tahun pengalaman, CV. Aulia Kharisma adalah mitra terpercaya dalam mewujudkan proyek konstruksi yang kompleks. Visi kami adalah menjadi kontraktor terdepan yang dikenal akan keandalan, inovasi, dan integritas. Kami berdedikasi untuk menyelesaikan setiap proyek dengan standar tertinggi, melebihi ekspektasi klien, dan berkontribusi positif bagi pembangunan Indonesia.
                    </p>
                </div>
                
                <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center`}>
                    {values.map((value, index) => (
                        <div 
                            key={index} 
                            className={`p-8 bg-gray-50 rounded-lg shadow-sm reveal ${isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${200 + index * 150}ms` }}
                        >
                             <div className="flex justify-center mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold font-slab text-charcoal mb-3">{value.title}</h3>
                            <p className="text-gray-700">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;