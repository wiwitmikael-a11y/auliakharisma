import React, { useState, useEffect } from 'react';

const navLinks = [
    { name: 'Tentang Kami', href: '#tentang-kami' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Klien', href: '#klien' },
    { name: 'Hubungi Kami', href: '#hubungi-kami' }
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mengubah ambang batas menjadi sangat kecil untuk memastikan transisi terjadi SEGERA.
            // Ini adalah perbaikan kritis untuk mencegah teks putih muncul di atas background putih.
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
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isHeaderOpaque ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <a href="#beranda" onClick={(e) => handleSmoothScroll(e, '#beranda')} className={`text-2xl font-bold font-slab transition-colors ${isHeaderOpaque ? 'text-deep-blue' : 'text-white'}`}>
                        CV. Aulia Kharisma
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-8">
                        {navLinks.map(link => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleSmoothScroll(e, link.href)} 
                                className={`font-semibold transition-colors ${isHeaderOpaque ? 'text-charcoal hover:text-deep-blue' : 'text-white hover:text-gray-300'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className={`transition-colors ${isHeaderOpaque ? 'text-charcoal' : 'text-white'}`}>
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
                <div className="lg:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(link => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleSmoothScroll(e, link.href)} 
                                className="text-charcoal hover:text-safety-orange font-semibold transition-colors"
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