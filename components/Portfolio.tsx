import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { useRevealAnimation } from './hooks';
import { ArrowUpRightIcon } from './icons';

const projectsData: Project[] = [
    {
        id: 1,
        title: 'Pelebaran Jalan Nasional Rute 5',
        category: 'Jalan Raya',
        imageUrl: 'https://images.unsplash.com/photo-1599677051204-73c681d1b4a0?q=80&w=500&auto=format&fit=crop',
        client: 'Kementerian PUPR',
        location: 'Jawa Barat',
        duration: '12 Bulan',
        scopeOfWork: ['Pelebaran jalan 2 lajur', 'Pekerjaan drainase', 'Pemasangan marka jalan']
    },
    {
        id: 2,
        title: 'Pembangunan Gedung Perkantoran BCD',
        category: 'Gedung',
        imageUrl: 'https://images.unsplash.com/photo-1511913411691-b993af11316b?q=80&w=500&auto=format&fit=crop',
        client: 'PT. Properti Sejahtera',
        location: 'Jakarta Selatan',
        duration: '18 Bulan',
        scopeOfWork: ['Struktur beton bertulang', 'Pekerjaan arsitektural', 'Instalasi MEP']
    },
    {
        id: 3,
        title: 'Jembatan Layang Simpang Tiga',
        category: 'Jembatan',
        imageUrl: 'https://images.unsplash.com/photo-1525186492332-99757a340112?q=80&w=500&auto=format&fit=crop',
        client: 'Dinas PU Kota',
        location: 'Surabaya',
        duration: '24 Bulan',
        scopeOfWork: ['Fondasi tiang pancang', 'Struktur jembatan baja', 'Pekerjaan pengaspalan']
    },
    {
        id: 4,
        title: 'Renovasi Fasad Mall Metropolitan',
        category: 'Renovasi',
        imageUrl: 'https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?q=80&w=500&auto=format&fit=crop',
        client: 'PT. Retail Maju',
        location: 'Bekasi',
        duration: '6 Bulan',
        scopeOfWork: ['Pembongkaran fasad lama', 'Pemasangan ACP', 'Pekerjaan lighting']
    },
    {
        id: 5,
        title: 'Pembangunan Cluster Perumahan Green Valley',
        category: 'Gedung',
        imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=500&auto=format&fit=crop',
        client: 'Summarecon',
        location: 'Tangerang',
        duration: '36 Bulan',
        scopeOfWork: ['Pembangunan 150 unit rumah', 'Infrastruktur kawasan', 'Fasilitas umum']
    },
    {
        id: 6,
        title: 'Perbaikan Jalan Tol Cipularang KM 90',
        category: 'Jalan Raya',
        imageUrl: 'https://images.unsplash.com/photo-1620126487541-1811b0373aa7?q=80&w=500&auto=format&fit=crop',
        client: 'Jasa Marga',
        location: 'Purwakarta',
        duration: '3 Bulan',
        scopeOfWork: ['Pelapisan ulang aspal', 'Perbaikan beton jalan', 'Pemasangan guardrail']
    },
];

const categories: ('Semua' | Project['category'])[] = ['Semua', 'Jalan Raya', 'Gedung', 'Jembatan', 'Renovasi'];

export const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'Semua' | Project['category']>('Semua');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const { ref, isVisible } = useRevealAnimation();

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    const filteredProjects = activeCategory === 'Semua'
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);
    
    const openModal = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <>
            <section id="proyek" className="py-20 blueprint-pattern-light">
                <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center reveal ${isVisible ? 'visible' : ''}`}>
                        <h2 
                            className="text-3xl md:text-4xl font-slab font-bold text-charcoal text-center mb-4"
                        >
                            Portofolio Proyek
                        </h2>
                        <p 
                            className="text-center text-lg text-charcoal max-w-3xl mx-auto mb-12"
                        >
                            Berikut adalah beberapa proyek unggulan yang telah kami selesaikan dengan sukses.
                        </p>
                    </div>

                    <div className={`flex justify-center flex-wrap gap-2 my-8 reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                                    activeCategory === category
                                        ? 'bg-safety-orange text-charcoal'
                                        : 'bg-white text-charcoal hover:bg-deep-blue/10'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                onClick={() => openModal(project)}
                                className={`group overflow-hidden rounded-lg shadow-lg cursor-pointer reveal ${isVisible ? 'visible' : ''}`}
                                style={{
                                    transitionDelay: `${200 + index * 100}ms`,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                                }}
                            >
                                <div className="relative">
                                    <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center">
                                        <ArrowUpRightIcon className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-4 text-white">
                                        <span className="text-sm bg-safety-orange text-charcoal px-2 py-1 rounded">{project.category}</span>
                                        <h3 className="text-lg font-bold font-slab mt-1">{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" 
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`modal-title-${selectedProject.id}`}
                >
                    <div className="bg-white rounded-lg shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-cover" />
                        <div className="p-8">
                            <div className="flex justify-between items-start">
                                <h2 id={`modal-title-${selectedProject.id}`} className="text-2xl font-bold font-slab text-charcoal mb-2">{selectedProject.title}</h2>
                                <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-3xl leading-none p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-safety-orange" aria-label="Tutup modal">&times;</button>
                            </div>
                            <span className="text-sm bg-safety-orange text-charcoal px-2 py-1 rounded-full">{selectedProject.category}</span>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-700">
                                <p><strong>Klien:</strong> {selectedProject.client}</p>
                                <p><strong>Lokasi:</strong> {selectedProject.location}</p>
                                <p><strong>Durasi:</strong> {selectedProject.duration}</p>
                            </div>

                            <h3 className="text-lg font-bold text-charcoal mt-6 mb-2">Lingkup Pekerjaan:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {selectedProject.scopeOfWork.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};