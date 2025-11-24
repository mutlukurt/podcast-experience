import { Podcast, Youtube, Music } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 border-b border-gray-200 pb-12">
                {/* Supported By */}
                <div className="flex flex-col gap-4 w-full lg:w-auto text-center lg:text-left">
                    <h3 className="font-bold uppercase text-sm tracking-wider">{t('stats.supportedBy')}</h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-gray-500">
                        {/* Using Lucide icons as placeholders for brand logos */}
                        <div className="flex items-center gap-1"><Music size={20} /><span className="font-bold text-black">Spotify</span></div>
                        <div className="flex items-center gap-1"><Podcast size={20} /><span className="font-bold text-black">Google Podcast</span></div>
                        <div className="flex items-center gap-1"><Youtube size={20} /><span className="font-bold text-black">Youtube</span></div>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex gap-8 sm:gap-12 w-full lg:w-auto justify-center">
                    <div className="text-center">
                        <h4 className="text-2xl sm:text-3xl font-black">1M</h4>
                        <p className="text-[10px] sm:text-xs font-bold uppercase text-gray-500">{t('stats.listeners')}</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl sm:text-3xl font-black">5M</h4>
                        <p className="text-[10px] sm:text-xs font-bold uppercase text-gray-500">{t('stats.stream')}</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl sm:text-3xl font-black">1M</h4>
                        <p className="text-[10px] sm:text-xs font-bold uppercase text-gray-500">{t('stats.users')}</p>
                    </div>
                </div>

                {/* Avatar Group */}
                <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-end">
                    <div className="flex -space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                        <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                        <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                    </div>
                    <div className="text-xs font-bold">
                        <p>{t('stats.bestPlatform')}</p>
                        <p className="text-gray-500">{t('stats.forPodcaster')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
