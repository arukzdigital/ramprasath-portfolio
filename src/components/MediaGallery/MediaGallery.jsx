import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './MediaGallery.css';

const MediaGallery = () => {
    const [activeTab, setActiveTab] = useState('videos');

    const videos = [
        { title: "Performance Reel 1", url: "https://www.youtube.com/embed/zDX8cVhZpwo", category: "Performance" },
        { title: "Performance Reel 2", url: "https://www.youtube.com/embed/ny_qTmnqsyE", category: "Performance" },
        { title: "Performance Reel 3", url: "https://www.youtube.com/embed/GCUybdjE-pE", category: "Performance" },
        { title: "Self Introduction", url: "https://www.youtube.com/embed/4pQq4caQFh8", category: "Intro" },
        { title: "Short Film - Vegumathi", url: "https://www.youtube.com/embed/fAFrjUIx86o", category: "Short Film" }
    ];

    return (
        <section id="media" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <h2 className="gradient-text">Showcase</h2>
                <div className="underline"></div>
            </motion.div>

            <div className="media-tabs flex-center">
                <button
                    className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('videos')}
                >
                    Videos
                </button>
                <button
                    className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('photos')}
                >
                    Photos
                </button>
            </div>

            {activeTab === 'videos' && (
                <motion.div
                    className="video-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {videos.map((vid, idx) => (
                        <div key={idx} className="video-card glass-card">
                            <div className="video-wrapper">
                                <iframe
                                    src={vid.url}
                                    title={vid.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="video-info">
                                <span className="accent-text">{vid.category}</span>
                                <h4>{vid.title}</h4>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}

            {activeTab === 'photos' && (
                <motion.div
                    className="photo-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Placeholders for Headshot, Mid-shot, Full-shot */}
                    <div className="photo-item placeholder glass-card">
                        <span>Headshot Placeholder</span>
                    </div>
                    <div className="photo-item placeholder glass-card span-row">
                        <span>Mid-shot Placeholder</span>
                    </div>
                    <div className="photo-item placeholder glass-card">
                        <span>Full-shot Placeholder</span>
                    </div>
                    <div className="photo-item placeholder glass-card">
                        <span>Portfolio 4</span>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default MediaGallery;
