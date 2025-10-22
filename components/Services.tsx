import React from 'react';
import { BuildingIcon, BridgeIcon, BlueprintIcon, ClipboardCheckIcon } from './icons';
import { useRevealAnimation } from './hooks';

const services = [
    {
        icon: <BuildingIcon className="h-12 w-12 text-safety-orange mb-4" />,
        title: 'Kontraktor Bangunan',
        description: 'Pembangunan gedung komersial, perkantoran, perumahan, dan fasilitas industri dengan standar mutu tertinggi.'
    },
    {
        icon: <BridgeIcon className="h-12 w-12 text-safety-orange mb-4" />,
        title: 'Kontraktor Jalan & Jembatan',
        description: 'Pengerjaan infrastruktur jalan raya, jembatan, dan pekerjaan sipil lainnya untuk konektivitas yang lebih baik.'
    },
    {
        icon: <BlueprintIcon className="h-12 w-12 text-safety-orange mb-4" />,
        title: 'Jasa Perencanaan & Estimasi',
        description: 'Menyediakan layanan perencanaan detail, desain teknis, dan Rencana Anggaran Biaya (RAB) yang akurat.'
    },
    {
        icon: <ClipboardCheckIcon className="h-12 w-12 text-safety-orange mb-4" />,
        title: 'Manajemen Konstruksi',
        description: 'Pengawasan dan manajemen proyek secara profesional untuk memastikan efisiensi, kualitas, dan ketepatan waktu.'
    }
];

const Services: React.FC = () => {
    const { ref, isVisible } = useRevealAnimation();

    return (
        <section id="layanan" className="py-20 bg-gray-50">
            <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center reveal ${isVisible ? 'visible' : ''}`}>
                    <h2 className="section-title">Layanan Inti Kami</h2>
                    <p className="section-subtitle">
                        Kami menyediakan solusi konstruksi yang komprehensif untuk memenuhi berbagai kebutuhan proyek Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 reveal"
                            style={{ 
                                transitionDelay: `${index * 100}ms`, 
                                opacity: isVisible ? 1 : 0, 
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)' 
                            }}
                        >
                            <div className="flex justify-center">{service.icon}</div>
                            <h3 className="text-xl font-bold font-slab text-charcoal mb-3">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;