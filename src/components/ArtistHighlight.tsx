import { ArrowUpRight } from 'lucide-react';

const ArtistHighlight = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 mb-20">
            <div className="flex justify-between items-start mb-12">
                <h2 className="text-4xl font-black uppercase">Artist Highlight<br />Of The Week</h2>
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
                        <h3 className="text-white font-black uppercase text-xl">John Doe</h3>
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
                        <h3 className="text-white font-black uppercase text-xl">Jane Smith</h3>
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
                        <h3 className="text-white font-black uppercase text-xl">Joy Unbound</h3>
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
                        <h3 className="text-white font-black uppercase text-xl">Sarah Lee</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistHighlight;
