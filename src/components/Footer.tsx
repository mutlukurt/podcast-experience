import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 pb-12 mb-8">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
                        D
                    </div>

                    <div className="flex gap-8 text-sm font-bold uppercase text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    </div>

                    <p className="text-xs text-gray-500 uppercase">
                        © 2025 Mutlu Kurt. Licensed under MIT License.<br />Designed by Mutlu
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
