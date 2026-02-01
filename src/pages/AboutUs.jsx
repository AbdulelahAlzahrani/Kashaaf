import React from 'react';
import { motion } from 'framer-motion';
import { Users, Cpu, Target, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gaming-dark text-white overflow-hidden relative">
            <Navbar />
            <main className="flex-grow pt-32 pb-16"> {/* Increased top padding */}

                <div className="relative z-10 container mx-auto px-4 max-w-6xl"> {/* Increased max-width */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col w-full"
                    >

                        {/* 1. Header Section: Logo Left, Text Right */}
                        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                            {/* Left: Logo */}
                            <motion.div
                                variants={itemVariants}
                                className="w-full md:w-1/2 flex justify-center md:justify-center"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}logo-final.png`}
                                    alt="Kashaaf Logo"
                                    className="w-80 md:w-[450px] h-auto object-contain drop-shadow-2xl"
                                />
                            </motion.div>

                            {/* Right: Title & Intro */}
                            <motion.div
                                variants={itemVariants}
                                className="w-full md:w-1/2 text-center md:text-left"
                            >
                                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gaming-primary to-gaming-secondary mb-4">
                                    Kashaaf
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
                                    The Future of Esports Talent Discovery
                                </h2>
                                <p className="text-xl text-gray-400 leading-relaxed">
                                    Kashaaf serves as the comprehensive digital ecosystem for the esports sector, designed to bridge the gap between ambition and professionalism.
                                </p>
                            </motion.div>
                        </div>

                        {/* 2. Content Sections: Network & AI (Stacked Vertical) */}
                        <div className="space-y-16 mb-24 max-w-4xl mx-auto w-full">
                            {/* Professional Esports Network */}
                            <motion.div
                                variants={itemVariants}
                                className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gaming-primary/50 transition-all"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-16 h-16 rounded-full bg-gaming-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Share2 className="text-gaming-primary w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 text-white">Professional Esports Network</h3>
                                        <p className="text-gray-400 leading-relaxed text-lg">
                                            A dedicated space for the entire esports ecosystem—Players, Coaches, Referees, and Streamers.
                                            Showcase your journey, publish your professional CV, and share highlights that demonstrate your true skill level.
                                            Connect with like-minded professionals in a specialized environment built just for gaming.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* AI-Powered Evolution */}
                            <motion.div
                                variants={itemVariants}
                                className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gaming-secondary/50 transition-all"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-16 h-16 rounded-full bg-gaming-secondary/20 flex items-center justify-center flex-shrink-0">
                                        <Cpu className="text-gaming-secondary w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 text-white">AI-Powered Evolution</h3>
                                        <p className="text-gray-400 leading-relaxed text-lg">
                                            Transform from amateur to professional with our advanced AI analysis. Upload your gameplay footage and receive
                                            instant, data-driven ratings and varied advice. Our system designs a personalized professional development path
                                            tailored specifically to your current level and goals.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 3. Vision Section */}
                        <motion.div
                            variants={itemVariants}
                            className="text-center p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 max-w-4xl mx-auto w-full"
                        >
                            <div className="flex justify-center mb-6">
                                <Target className="w-16 h-16 text-gaming-primary" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                            <p className="text-xl md:text-2xl font-bold text-gray-200 leading-relaxed">
                                "To become the leading platform for discovering and empowering esports talents in Saudi Arabia and the Middle East."
                            </p>
                        </motion.div>

                        {/* 4. Join CTA */}
                        <motion.div variants={itemVariants} className="text-center mt-20 mb-10">
                            <h2 className="text-4xl md:text-5xl font-black italic text-white mb-8 tracking-tighter">
                                JOIN IN ON THE FUN NOW!
                            </h2>
                            <button className="px-10 py-4 bg-gaming-primary text-black font-bold text-xl rounded-full hover:bg-gaming-primary/80 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,153,0.3)]">
                                Sign Up Free
                            </button>
                        </motion.div>

                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
