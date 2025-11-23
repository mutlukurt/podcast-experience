

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Audio', href: '#audio' },
        { name: 'Talk', href: '#talk' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Skip Navigation Link for Accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
            >
                Skip to main content
            </a>

            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto" role="navigation" aria-label="Main navigation">
                    <div className="flex items-center gap-2">
                        <a href="#home" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold" aria-label="Home">
                            D
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wide">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <button className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm uppercase hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                            Start Here
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
                        onClick={toggleMenu}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay - Now inside nav but after main content */}
                {isOpen && (
                    <div
                        id="mobile-menu"
                        className="bg-white border-t border-gray-200 py-6 px-6 flex flex-col gap-4 md:hidden"
                        role="menu"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium uppercase tracking-wide hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
                                onClick={() => setIsOpen(false)}
                                role="menuitem"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm uppercase hover:bg-gray-800 transition-colors w-full mt-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                            Start Here
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
