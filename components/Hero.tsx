import React from 'react';
import { useLanguage } from './hooks';

const Hero: React.FC = () => {
    const { content } = useLanguage();

    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.getElementById('projects');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section 
            id="home" 
            className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
        >
            <div 
                className="absolute inset-0 bg-cover bg-center hero-bg-zoom"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-charcoal opacity-60"></div>
            <div className="relative z-10 p-4">
                <h1 className="text-3xl md:text-5xl font-extrabold font-slab leading-tight mb-4 drop-shadow-lg">
                    {content.heroTitleLine1} <br /> {content.heroTitleLine2}
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-100 drop-shadow-md">
                    {content.heroSubtitle}
                </p>
                <a 
                    href="#projects" 
                    onClick={handleScrollToProjects}
                    className="bg-safety-orange hover:opacity-90 text-charcoal font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 inline-block"
                >
                    {content.heroButton}
                </a>
            </div>
        </section>
    );
};

export default Hero;