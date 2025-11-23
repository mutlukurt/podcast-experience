import { Play } from 'lucide-react';

const LeadingPodcaster = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-black uppercase">Our Leading<br />Podcaster</h2>
                <button className="flex items-center gap-2 bg-orange-400 px-6 py-2 rounded-full font-bold uppercase hover:bg-orange-500 transition-colors">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <Play size={12} className="text-orange-500 ml-0.5" />
                    </div>
                    Start Listening
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
                        <p className="text-sm font-bold uppercase text-gray-500 mb-2">24 Episodes</p>
                        <h3 className="text-4xl font-black uppercase mb-4">Build A<br />Community</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Learn the secrets of building a loyal community around your content. From engagement strategies to monetization, we cover it all.
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
