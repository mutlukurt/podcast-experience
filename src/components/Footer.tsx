import { Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-black text-white py-12 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                        <Mic size={16} />
                    </div>
                    <span className="font-black text-lg tracking-tighter">PODCAST</span>
                </div>
                <div className="flex gap-8 text-sm font-bold uppercase text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
                    <a href="#" className="hover:text-white transition-colors">{t('footer.sitemap')}</a>
                    <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                </div>
                <div className="text-gray-500 text-sm font-medium">
                    {t('footer.copyright')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
