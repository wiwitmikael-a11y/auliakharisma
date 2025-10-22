import React from 'react';
import { LinkedInIcon, CodeIcon } from './icons';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

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
    };

    const quickLinks = [
        { name: 'Tentang Kami', href: '#tentang-kami' },
        { name: 'Layanan', href: '#layanan' },
        { name: 'Proyek', href: '#proyek' },
        { name: 'Hubungi Kami', href: '#hubungi-kami' }
    ];

    return (
        <footer className="bg-charcoal text-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold font-slab text-white mb-4">CV. Aulia Kharisma</h3>
                        <p className="text-gray-300">
                            Solusi konstruksi terpercaya yang mengedepankan kualitas, integritas, dan keamanan untuk setiap proyek Anda.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold font-slab text-white mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} className="hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xl font-bold font-slab text-white mb-4">Terhubung Dengan Kami</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                                <LinkedInIcon className="h-6 w-6" />
                            </a>
                        </div>
                         <p className="text-gray-300 mt-4">
                            Jl. Kertabumi Gg. Harrumanis II No. 21<br/>
                            Karawang, Jawa Barat, Indonesia
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300 text-sm">
                    <p>&copy; {currentYear} CV. Aulia Kharisma. Hak Cipta Dilindungi.</p>
                    <div className="mt-2 flex items-center justify-center space-x-2">
                        <span className="text-gray-300">Web Design & Development by</span>
                        <a 
                            href="https://www.instagram.com/rangga.p.h/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Developer's Instagram" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <CodeIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;