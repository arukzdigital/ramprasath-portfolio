import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, PlayCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const scrollToVideos = () => {
        document.getElementById('media').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero-section flex-center">
            <div className="glow-orb" style={{ top: '-10%', left: '-10%' }}></div>
            <div className="glow-orb" style={{ bottom: '-10%', right: '-10%', accentColor: 'var(--accent-color)' }}></div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        className="accent-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Professional Actor
                    </motion.span>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Ram <span className="gradient-text">Prasath.T</span>
                    </motion.h1>

                    <motion.h3
                        className="hero-subtitle text-muted"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        Versatile performances across Film, Theatre, and Digital Media.
                    </motion.h3>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                    >
                        <button className="btn btn-primary" onClick={scrollToVideos}>
                            <PlayCircle size={20} />
                            View Showreel
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            >
                <ChevronDown size={30} color="var(--text-muted)" />
            </motion.div>
        </section>
    );
};

export default Hero;
