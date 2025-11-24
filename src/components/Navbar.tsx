import React, { useState } from 'react';
import { Menu, X, Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                        <Mic size={20} />
                    </div>
                    <span className="font-black text-xl tracking-tighter">PODCAST</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wide">
                    <a href="#home" className="hover:text-yellow-400 transition-colors">{t('navbar.home')}</a>
                    <a href="#about" className="hover:text-yellow-400 transition-colors">{t('navbar.about')}</a>
                    <a href="#audio" className="hover:text-yellow-400 transition-colors">{t('navbar.audio')}</a>
                    <a href="#talk" className="hover:text-yellow-400 transition-colors">{t('navbar.talk')}</a>
                    <a href="#contact" className="hover:text-yellow-400 transition-colors">{t('navbar.contact')}</a>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 ml-4 border-l pl-4 border-gray-200">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`text-xl hover:scale-110 transition-transform ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50'}`}
                            aria-label="Switch to English"
                        >
                            🇺🇸
                        </button>
                        <button
                            onClick={() => changeLanguage('pt')}
                            className={`text-xl hover:scale-110 transition-transform ${i18n.language === 'pt' ? 'opacity-100' : 'opacity-50'}`}
                            aria-label="Mudar para Português"
                        >
                            🇧🇷
                        </button>
                    </div>

                    <button className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm uppercase hover:bg-gray-800 transition-colors">
                        {t('navbar.startHere')}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    {/* Mobile Language Switcher */}
                    <div className="flex items-center gap-2 mr-2">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`text-lg ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50'}`}
                        >
                            🇺🇸
                        </button>
                        <button
                            onClick={() => changeLanguage('pt')}
                            className={`text-lg ${i18n.language === 'pt' ? 'opacity-100' : 'opacity-50'}`}
                        >
                            🇧🇷
                        </button>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="p-2 text-black focus:outline-none"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                        <a href="#home" onClick={toggleMenu} className="text-2xl font-black uppercase hover:text-yellow-400 transition-colors">{t('navbar.home')}</a>
                        <a href="#about" onClick={toggleMenu} className="text-2xl font-black uppercase hover:text-yellow-400 transition-colors">{t('navbar.about')}</a>
                        <a href="#audio" onClick={toggleMenu} className="text-2xl font-black uppercase hover:text-yellow-400 transition-colors">{t('navbar.audio')}</a>
                        <a href="#talk" onClick={toggleMenu} className="text-2xl font-black uppercase hover:text-yellow-400 transition-colors">{t('navbar.talk')}</a>
                        <a href="#contact" onClick={toggleMenu} className="text-2xl font-black uppercase hover:text-yellow-400 transition-colors">{t('navbar.contact')}</a>
                        <button className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase text-lg hover:bg-gray-800 transition-colors mt-4">
                            {t('navbar.startHere')}
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
