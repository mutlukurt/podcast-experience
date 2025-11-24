import { useTranslation } from 'react-i18next';

const Newsletter = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-black py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-yellow-400 rounded-[3rem] p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden text-center md:text-left">

                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-none mb-8 text-white drop-shadow-lg">
                            {t('newsletter.ctaTitle')}
                        </h2>
                        <div className="flex gap-4">
                            <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase hover:bg-gray-100 transition-colors">
                                {t('newsletter.getStarted')}
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-white/10 transition-colors">
                                {t('newsletter.learnMore')}
                            </button>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img
                                src="/assets/category_woman_laughing_1763920751307.png"
                                alt="Happy Listener"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Decorative Circle */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-300 rounded-full translate-x-1/3 -translate-y-1/3 -z-0"></div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
