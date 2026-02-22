import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Instagram, Youtube } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToPortfolio = () => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero-section">
            <div className="container hero-container text-center">
                <motion.div
                    className="hero-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="brand-name">RAM PRASATH</span>
                    <div className="header-socials flex-center" style={{ gap: '1rem' }}>
                        <a href="#" className="social-icon-sm" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" className="social-icon-sm" aria-label="YouTube"><Youtube size={20} /></a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="tagline">Actor &bull; Performer &bull; Artist</span>
                    <h1 className="hero-title">RAM PRASATH.T</h1>

                    <p className="hero-subtitle">
                        A passionate actor bringing characters to life through film, theatre, and dynamic storytelling.
                        Dedicated to authentic expression and captivating performances.
                    </p>

                    <div className="hero-actions flex-center">
                        <button className="btn btn-primary" onClick={scrollToPortfolio}>
                            <Sparkles size={18} />
                            View Portfolio
                        </button>
                        <button className="btn btn-outline" onClick={scrollToContact}>
                            Get In Touch
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Main Hero Image */}
                    <div className="hero-image-placeholder">
                        <div className="glass-card overlay-intro">
                            <p>"Acting is not about being someone different. It's finding the similarity in what is apparently different."</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
