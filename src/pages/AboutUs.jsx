import React from 'react';
import { motion } from 'framer-motion';
import { Users, Cpu, Target, Share2, TrendingUp, Shield, Video } from 'lucide-react';
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
            <main className="flex-grow pt-24 pb-16">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gaming-primary/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gaming-secondary/20 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 container mx-auto px-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl mx-auto"
                    >
                        {/* Header */}
                        <motion.div variants={itemVariants} className="text-center mb-20">
                            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gaming-primary to-gaming-secondary mb-6">
                                Kashaaf
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-light text-gray-300">
                                The Future of Esports Talent Discovery
                            </h2>
                        </motion.div>

                        {/* Intro */}
                        <motion.div variants={itemVariants} className="mb-16 text-center">
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                                Kashaaf serves as the comprehensive digital ecosystem for the esports sector, designed to bridge the gap between ambition and professionalism.
                            </p>
                        </motion.div>

                        {/* Main Pillars */}
                        <div className="grid md:grid-cols-2 gap-8 mb-20">
                            {/* The Network */}
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gaming-primary/50 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-gaming-primary/20 flex items-center justify-center mb-6">
                                    <Share2 className="text-gaming-primary w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Professional Esports Network</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    A dedicated space for the entire esports ecosystem—Players, Coaches, Referees, and Streamers.
                                    Showcase your journey, publish your professional CV, and share highlights that demonstrate your true skill level.
                                    Connect with like-minded professionals in a specialized environment built just for gaming.
                                </p>
                            </motion.div>

                            {/* The AI */}
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gaming-secondary/50 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-gaming-secondary/20 flex items-center justify-center mb-6">
                                    <Cpu className="text-gaming-secondary w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">AI-Powered Evolution</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Transform from amateur to professional with our advanced AI analysis. Upload your gameplay footage and receive
                                    instant, data-driven ratings and varied advice. Our system designs a personalized professional development path
                                    tailored specifically to your current level and goals.
                                </p>
                            </motion.div>
                        </div>

                        {/* Vision */}
                        <motion.div
                            variants={itemVariants}
                            className="text-center p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5"
                        >
                            <div className="flex justify-center mb-6">
                                <Target className="w-12 h-12 text-gaming-primary" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                            <p className="text-2xl md:text-3xl font-light italic text-gray-200 leading-relaxed">
                                "To become the leading platform for discovering and empowering esports talents in saudi arabia and the middle east, connecting players ,team ,investors."
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
