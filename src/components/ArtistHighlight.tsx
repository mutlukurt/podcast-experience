import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ArtistHighlight = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 mb-20">
            <div className="flex justify-between items-start mb-12">
                <h2 className="text-4xl font-black uppercase">{t('artistHighlight.title')}<br />{t('artistHighlight.subtitle')}</h2>
                <ArrowUpRight size={32} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Card 1 */}
                <div className="bg-orange-400 rounded-3xl overflow-hidden aspect-[3/4] relative group">
                    <img
                        src="/assets/category_man_yellow_1763920774191.png"
                        alt="Artist 1"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent">
                        <h3 className="text-white font-black uppercase text-xl">{t('artistHighlight.items.artist1.name')}</h3>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-blue-500 rounded-3xl overflow-hidden aspect-[3/4] relative group">
                    <img
                        src="/assets/artist_highlight_1_1763920873895.png"
                        alt="Artist 2"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent">
                        <h3 className="text-white font-black uppercase text-xl">{t('artistHighlight.items.artist2.name')}</h3>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-yellow-400 rounded-3xl overflow-hidden aspect-[3/4] relative group">
                    <img
                        src="/assets/comedy_highlight_final.jpg"
                        alt="Artist 3"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent">
                        <h3 className="text-white font-black uppercase text-xl">{t('artistHighlight.items.artist3.name')}</h3>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-pink-500 rounded-3xl overflow-hidden aspect-[3/4] relative group">
                    <img
                        src="/assets/category_woman_laughing_1763920751307.png"
                        alt="Artist 4"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent">
                        <h3 className="text-white font-black uppercase text-xl">{t('artistHighlight.items.artist4.name')}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistHighlight;
