import React, { useState, useEffect } from 'react';
import { useTheme, useLanguage } from './hooks';
import { SunIcon, MoonIcon } from './icons';

const LanguageSwitcher: React.FC<{ isHeaderOpaque: boolean }> = ({ isHeaderOpaque }) => {
    const { lang, toggleLang } = useLanguage();

    return (
        <button
            onClick={toggleLang}
            aria-label={`Switch to ${lang === 'id' ? 'English' : 'Indonesian'}`}
            className={`px-3 py-2 text-sm font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-safety-orange ${
                isHeaderOpaque 
                    ? 'text-charcoal hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700' 
                    : 'text-white hover:bg-white/20'
            }`}
        >
            {lang === 'id' ? 'EN' : 'ID'}
        </button>
    );
}

const ThemeSwitcher: React.FC<{ isHeaderOpaque: boolean }> = ({ isHeaderOpaque }) => {
    const { theme, toggleTheme } = useTheme();
    const { content } = useLanguage();

    return (
        <button
            onClick={toggleTheme}
            aria-label={content.themeSwitcherLabel}
            className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-safety-orange ${
                isHeaderOpaque 
                    ? 'text-charcoal hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700' 
                    : 'text-white hover:bg-white/20'
            }`}
        >
            {theme === 'light' ? (
                <MoonIcon className="h-5 w-5" />
            ) : (
                <SunIcon className="h-5 w-5" />
            )}
        </button>
    );
};


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { content } = useLanguage();
    const navLinks = content.navLinks;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace(/.*#/, "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    const isHeaderOpaque = isScrolled || isMenuOpen;

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isHeaderOpaque ? 'bg-white shadow-md dark:bg-gray-800 dark:shadow-none' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className={`text-2xl font-bold font-slab transition-colors ${isHeaderOpaque ? 'text-deep-blue dark:text-safety-orange' : 'text-white'}`}>
                        {content.companyName}
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link: {name: string, href: string}) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleSmoothScroll(e, link.href)} 
                                className={`font-semibold transition-colors ${isHeaderOpaque ? 'text-charcoal hover:text-deep-blue dark:text-gray-200 dark:hover:text-safety-orange' : 'text-white hover:text-gray-300'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                     <div className="hidden lg:flex items-center ml-4 gap-2">
                        <LanguageSwitcher isHeaderOpaque={isHeaderOpaque} />
                        <ThemeSwitcher isHeaderOpaque={isHeaderOpaque} />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                         <LanguageSwitcher isHeaderOpaque={isHeaderOpaque} />
                         <ThemeSwitcher isHeaderOpaque={isHeaderOpaque} />
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className={`transition-colors ${isHeaderOpaque ? 'text-charcoal dark:text-gray-200' : 'text-white'}`}>
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clipRule="evenodd" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" clipRule="evenodd" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg dark:bg-gray-800">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map((link: {name: string, href: string}) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleSmoothScroll(e, link.href)} 
                                className="text-charcoal dark:text-gray-200 hover:text-safety-orange dark:hover:text-safety-orange font-semibold transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;