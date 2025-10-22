import React from 'react';
import { useRevealAnimation } from './hooks';
import { HardHatIcon } from './icons';

const About: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();

    const values = [
        { title: 'Kualitas', description: 'Menggunakan material terbaik dan pengerjaan presisi.' },
        { title: 'Integritas', description: 'Transparansi dan kejujuran dalam setiap tahap proyek.' },
        { title: 'Keamanan', description: 'Prioritas utama pada keselamatan dan kesehatan kerja (K3).' }
    ];

    return (
        <section id="tentang-kami" className="py-20 bg-white">
            <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center reveal ${isVisible ? 'visible' : ''}`}>
                    <h2 className="section-title">Tentang CV. Aulia Kharisma</h2>
                    <p className="section-subtitle max-w-3xl mx-auto">
                        Lebih dari 8 tahun, kami telah berdedikasi untuk menyediakan solusi konstruksi yang inovatif dan andal. Kami bangga menjadi bagian dari pembangunan infrastruktur dan properti yang berkualitas di Indonesia.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
                    <div className={`lg:w-1/2 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                        <img 
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" 
                            alt="Tim CV. Aulia Kharisma" 
                            className="rounded-lg shadow-2xl object-cover w-full h-[400px]"
                        />
                    </div>
                    <div className={`lg:w-1/2 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                        <h3 className="text-2xl font-bold font-slab text-charcoal mb-4">Visi & Misi Kami</h3>
                        <p className="text-gray-700 mb-6">
                            Visi kami adalah menjadi perusahaan konstruksi terdepan yang dikenal akan kualitas, inovasi, dan integritas. Misi kami adalah menyelesaikan setiap proyek dengan standar tertinggi, melebihi ekspektasi klien, serta berkontribusi positif bagi masyarakat dan lingkungan.
                        </p>
                        <div className="space-y-4">
                            {values.map((value, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <HardHatIcon className="h-6 w-6 text-safety-orange mt-1" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-charcoal">{value.title}</h4>
                                        <p className="text-gray-700">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;