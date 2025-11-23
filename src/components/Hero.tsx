import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-2"
                    >
                        Podcast
                    </motion.h1>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="flex items-center justify-between w-full max-w-4xl mx-auto mb-12"
                    >
                        <span className="text-xl md:text-3xl font-bold uppercase tracking-widest">Experience</span>
                        <button className="flex items-center gap-2 bg-primary px-6 py-2 rounded-full font-bold uppercase hover:bg-yellow-400 transition-colors">
                            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                <Play size={16} className="text-white ml-1" />
                            </div>
                            Start Listening
                        </button>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-lg mx-auto mt-8 md:mt-0"
                >
                    <div className="aspect-square relative rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <img
                            src="/assets/hero_man_headphones_1763920733752.png"
                            alt="Man with headphones"
                            className="w-full h-full object-cover"
                        />
                        {/* Blue highlight circle overlay effect if needed, but image has it */}
                    </div>

                    {/* Decorative elements */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-200 rounded-full -z-10 opacity-50"
                    ></motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-gray-100 rounded-full -z-20 opacity-30"
                    ></motion.div>
                </motion.div>
            </div>

            {/* Marquee Strips */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-20 mix-blend-multiply pointer-events-none">
                {/* We will implement the marquee strips later or as separate absolute positioned elements */}
            </div>

            {/* Marquee Banner (Static for now, can animate) */}
            <div className="w-full bg-black text-white py-3 overflow-hidden rotate-[-2deg] scale-110 translate-y-[-100px] relative z-0">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-8 whitespace-nowrap font-bold uppercase text-sm md:text-base"
                >
                    {/* Content repeated for seamless loop */}
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="bg-orange-500 px-2 py-1 rounded text-black">Business</span>
                            <span>Technology</span>
                            <span className="bg-blue-500 px-2 py-1 rounded text-black">Health Care</span>
                            <span>Self Grow</span>
                            <span className="bg-pink-500 px-2 py-1 rounded text-black">Crypto NFT</span>
                            <span className="bg-orange-500 px-2 py-1 rounded text-black">Business</span>
                            <span>Technology</span>
                            <span className="bg-blue-500 px-2 py-1 rounded text-black">Health Care</span>
                            <span>Self Grow</span>
                            <span className="bg-pink-500 px-2 py-1 rounded text-black">Crypto NFT</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
            <div className="w-full bg-gray-800 text-white py-3 overflow-hidden rotate-[2deg] scale-110 translate-y-[-120px] relative z-[-1]">
                <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-8 whitespace-nowrap font-bold uppercase text-sm md:text-base"
                >
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span>Business</span>
                            <span className="bg-green-500 px-2 py-1 rounded text-black">Technology</span>
                            <span>Health Care</span>
                            <span className="bg-purple-500 px-2 py-1 rounded text-black">Self Grow</span>
                            <span>Crypto NFT</span>
                            <span>Business</span>
                            <span className="bg-green-500 px-2 py-1 rounded text-black">Technology</span>
                            <span>Health Care</span>
                            <span className="bg-purple-500 px-2 py-1 rounded text-black">Self Grow</span>
                            <span>Crypto NFT</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
