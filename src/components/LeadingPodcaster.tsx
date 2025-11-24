import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LeadingPodcaster = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-4xl font-black uppercase mb-2">{t('leadingPodcaster.title')}<br />{t('leadingPodcaster.subtitle')}</h2>
                    <p className="text-gray-500 font-medium max-w-md">
                        {t('leadingPodcaster.description')}
                    </p>
                </div>
                <button className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Play size={16} className="text-black ml-1" />
                    </div>
                    {t('hero.startListening')}
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-[3rem] p-8">
                <div className="relative h-[500px] rounded-[2rem] overflow-hidden bg-yellow-400">
                    <img
                        src="/assets/leading_podcaster_1763920832850.png"
                        alt="Leading Podcaster"
                        className="w-full h-full object-cover mix-blend-multiply"
                    />
                </div>

                <div className="flex flex-col gap-8 p-4">
                    <div>
                        <p className="text-sm font-bold uppercase text-gray-500 mb-2">{t('leadingPodcaster.episodeCount')}</p>
                        <h3 className="text-4xl font-black uppercase mb-4">{t('leadingPodcaster.communityTitle')}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {t('leadingPodcaster.communityDesc')}
                        </p>
                    </div>

                    <div className="relative h-64 bg-gray-200 rounded-3xl overflow-hidden">
                        <img
                            src="/assets/episode_thumbnail_tech_1763920816828.png"
                            alt="Headphones"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlaid headphones product shot if available, otherwise using the tech thumbnail */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadingPodcaster;
