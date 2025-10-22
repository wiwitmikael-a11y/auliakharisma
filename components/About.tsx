import React from 'react';
import { useRevealAnimation } from './hooks';
import { HardHatIcon, ClipboardCheckIcon } from './icons';

// Ikon baru untuk Kualitas dan Integritas
const QualityIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const IntegrityIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
);


const About: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();

    const values = [
        { 
            icon: <QualityIcon className="h-10 w-10 text-safety-orange" />,
            title: 'Kualitas Tanpa Kompromi', 
            description: 'Kami berkomitmen menggunakan material terbaik dan menerapkan standar pengerjaan presisi untuk hasil yang tahan lama dan memuaskan.' 
        },
        { 
            icon: <IntegrityIcon className="h-10 w-10 text-safety-orange" />,
            title: 'Integritas & Transparansi', 
            description: 'Membangun kepercayaan melalui komunikasi yang jujur dan transparansi penuh dalam setiap proses, mulai dari penawaran hingga serah terima.' 
        },
        { 
            icon: <HardHatIcon className="h-10 w-10 text-safety-orange" />,
            title: 'Keamanan sebagai Prioritas', 
            description: 'Menerapkan standar K3 (Keselamatan dan Kesehatan Kerja) yang ketat untuk melindungi semua pihak yang terlibat dalam proyek.' 
        }
    ];

    return (
        <section id="tentang-kami" className="py-20 blueprint-pattern-light">
            <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center reveal ${isVisible ? 'visible' : ''}`}>
                    <h2 className="section-title">Mitra Konstruksi Profesional Anda</h2>
                    <p className="section-subtitle">
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