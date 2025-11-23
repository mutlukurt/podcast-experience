import { Play } from 'lucide-react';

const LatestEpisodes = () => {
    const episodes = [
        {
            id: 1,
            title: "Product Design",
            image: "/assets/episode_thumbnail_tech_1763920816828.png",
            category: "Design",
            date: "Sep 28, 2025"
        },
        {
            id: 2,
            title: "Music Theory",
            image: "/assets/hero_man_headphones_1763920733752.png",
            category: "Music",
            date: "Sep 29, 2025"
        },
        {
            id: 3,
            title: "Tech Trends",
            image: "/assets/tech_trends_episode.jpg",
            category: "Technology",
            date: "Sep 30, 2025"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-black uppercase">Latest<br />Episodes</h2>
                <div className="flex flex-wrap gap-4 text-xs md:text-sm font-bold uppercase text-gray-400">
                    <button className="text-black border-b-2 border-black pb-1">All</button>
                    <button className="hover:text-black transition-colors">Design</button>
                    <button className="hover:text-black transition-colors">Business</button>
                    <button className="hover:text-black transition-colors">Tech</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {episodes.map((episode) => (
                    <div key={episode.id} className="group cursor-pointer">
                        <div className="relative rounded-3xl overflow-hidden mb-4 aspect-square">
                            <img
                                src={episode.image}
                                alt={episode.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300" aria-label={`Play ${episode.title} episode`}>
                                <Play size={16} fill="black" />
                            </button>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-xs font-bold uppercase text-gray-500">{episode.category}</span>
                                <h3 className="text-xl font-black uppercase mt-1">{episode.title}</h3>
                            </div>
                            <span className="text-xs font-bold text-gray-400">{episode.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestEpisodes;
