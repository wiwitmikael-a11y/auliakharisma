import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { useRevealAnimation, useLanguage } from './hooks';
import { ArrowUpRightIcon } from './icons';

export const Portfolio: React.FC = () => {
    const { content } = useLanguage();
    const projectsData = content.projects as Project[];
    const categories = content.projectCategories as string[];

    const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
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

    const filteredProjects = activeCategory === categories[0]
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);
    
    const openModal = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <>
            <section id="projects" className="py-20 modern-grid-bg-light">
                <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center reveal ${isVisible ? 'visible' : ''}`}>
                        <h2 
                            className="text-3xl md:text-4xl font-slab font-bold text-charcoal dark:text-white text-center mb-4"
                        >
                            {content.portfolioTitle}
                        </h2>
                        <p 
                            className="text-center text-lg text-charcoal dark:text-gray-300 max-w-3xl mx-auto mb-12"
                        >
                            {content.portfolioSubtitle}
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
                                        : 'bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-charcoal dark:text-gray-200 hover:bg-deep-blue/10 dark:hover:bg-deep-blue/30'
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
                                className={`group overflow-hidden rounded-lg shadow-lg cursor-pointer reveal bg-white dark:bg-gray-800 ${isVisible ? 'visible' : ''}`}
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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm" 
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`modal-title-${selectedProject.id}`}
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-cover" />
                        <div className="p-8">
                            <div className="flex justify-between items-start">
                                <h2 id={`modal-title-${selectedProject.id}`} className="text-2xl font-bold font-slab text-charcoal dark:text-white mb-2">{selectedProject.title}</h2>
                                <button onClick={closeModal} className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-3xl leading-none p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-safety-orange" aria-label={content.modalCloseLabel}>&times;</button>
                            </div>
                            <span className="text-sm bg-safety-orange text-charcoal px-2 py-1 rounded-full">{selectedProject.category}</span>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-700 dark:text-gray-300">
                                <p><strong>{content.modalClient}:</strong> {selectedProject.client}</p>
                                <p><strong>{content.modalLocation}:</strong> {selectedProject.location}</p>
                                <p><strong>{content.modalDuration}:</strong> {selectedProject.duration}</p>
                            </div>

                            <h3 className="text-lg font-bold text-charcoal dark:text-white mt-6 mb-2">{content.modalScope}:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                                {selectedProject.scopeOfWork.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};