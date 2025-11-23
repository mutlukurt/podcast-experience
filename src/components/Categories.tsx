import { ArrowUpRight } from 'lucide-react';

const Categories = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-4xl font-black uppercase mb-2">Explore<br />Categories</h2>
                    <p className="text-gray-500 font-medium">25+ Categories</p>
                </div>
                <div className="hidden md:block">
                    {/* Decorative sticker/badge */}
                    <div className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center animate-spin-slow">
                        <span className="text-[10px] font-bold uppercase text-center">Creative<br />Technology</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-auto md:h-[600px]">
                {/* Item 1 */}
                <div className="bg-yellow-400 rounded-3xl p-4 relative overflow-hidden group">
                    <img src="/assets/category_woman_laughing_1763920751307.png" alt="Woman laughing while listening to daily life podcasts with headphones" className="absolute inset-0 w-full h-full object-cover object-center transition-transform group-hover:scale-105" />
                    <div className="relative z-10">
                        <span className="bg-white px-3 py-1 rounded-full text-xs font-bold uppercase">Daily Life</span>
                    </div>
                </div>

                {/* Item 2 (Large Center) */}
                <div className="bg-orange-400 rounded-3xl p-4 relative overflow-hidden md:col-span-1 md:row-span-2 group">
                    <img src="/assets/conversation_journey_woman_1763920854942.png" alt="Woman enjoying culture and conversation podcasts" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <div className="relative z-10 flex justify-between">
                        <span className="bg-white px-3 py-1 rounded-full text-xs font-bold uppercase">Culture</span>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="bg-blue-500 rounded-3xl p-4 relative overflow-hidden group">
                    <img src="/assets/tech_category_final.png" alt="Tech podcaster in modern studio with futuristic background" className="absolute inset-0 w-full h-full object-cover object-center transition-transform group-hover:scale-105" />
                    <div className="relative z-10">
                        <span className="bg-white px-3 py-1 rounded-full text-xs font-bold uppercase">Tech</span>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="bg-blue-600 rounded-3xl p-4 relative overflow-hidden group">
                    <img src="/assets/hero_man_headphones_1763920733752.png" alt="Man with headphones listening to music podcasts" className="absolute inset-0 w-full h-full object-cover object-center transition-transform group-hover:scale-105" />
                    <div className="relative z-10">
                        <span className="bg-white px-3 py-1 rounded-full text-xs font-bold uppercase">Music</span>
                    </div>
                </div>

                {/* Item 5 */}
                <div className="bg-pink-500 rounded-3xl p-4 relative overflow-hidden group">
                    <img src="/assets/artist_highlight_1_1763920873895.png" alt="Business professional discussing entrepreneurship and business topics" className="absolute inset-0 w-full h-full object-cover object-center transition-transform group-hover:scale-105" />
                    <div className="relative z-10">
                        <span className="bg-white px-3 py-1 rounded-full text-xs font-bold uppercase">Business</span>
                    </div>
                </div>

                {/* Item 6 */}
                <div className="bg-yellow-500 rounded-3xl p-4 relative overflow-hidden group">
                    <img src="/assets/comedy_highlight_final.jpg" alt="Joyful person laughing while recording comedy podcast" className="absolute inset-0 w-full h-full object-cover object-center transition-transform group-hover:scale-105" />
                    <div className="relative z-10">
                        <span className="bg-white px-3 py-1 rounded-full text-xs font-bold uppercase">Comedy</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
