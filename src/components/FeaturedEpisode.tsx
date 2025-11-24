import React from 'react';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeaturedEpisode = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12">
            <h2 className="text-4xl font-black uppercase mb-8">{t('featuredEpisode.title')}<br />{t('featuredEpisode.subtitle')}</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-3xl overflow-hidden h-[400px] relative">
                    <img
                        src="/assets/category_man_yellow_1763920774191.png"
                        alt="Featured Episode"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="flex flex-col gap-6">
                    <p className="text-gray-500 font-medium">{t('featuredEpisode.date')}</p>
                    <h3 className="text-5xl font-black uppercase leading-tight">{t('featuredEpisode.episodeTitle')}<br />{t('featuredEpisode.episodeSubtitle')}</h3>
                    <p className="text-gray-600 leading-relaxed max-w-md">
                        {t('featuredEpisode.description')}
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                            <Play size={20} fill="white" />
                        </button>
                        <span className="font-bold uppercase tracking-wide">{t('featuredEpisode.startListening')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedEpisode;
