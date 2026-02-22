import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import './MediaGallery.css';

// Import all assets
import img1 from '../../assets/1000268676.jpg.jpeg';
import img2 from '../../assets/1000279374.jpg.jpeg';
import img3 from '../../assets/1000279375.jpg.jpeg';
import img4 from '../../assets/1000279377.jpg.jpeg';
import img5 from '../../assets/1000289082.jpg.jpeg';
import img6 from '../../assets/1000289083.jpg.jpeg';
import img7 from '../../assets/1000289086.jpg.jpeg';
import img8 from '../../assets/1000292817.jpg.jpeg';

const MediaGallery = () => {
    const [activeTab, setActiveTab] = useState('Photos');
    const [selectedVideo, setSelectedVideo] = useState(null);

    // New photos from assets
    const photos = [
        { id: 1, url: img1 },
        { id: 2, url: img2 },
        { id: 3, url: img3 },
        { id: 4, url: img4 },
        { id: 5, url: img5 },
        { id: 6, url: img6 },
        { id: 7, url: img7 },
        { id: 8, url: img8 },
    ];

    // Specific Youtube Links provided by user
    const videos = [
        { id: 1, title: 'Performance Showreel 1', yt: 'ny_qTmnqsyE' },
        { id: 2, title: 'Performance Showreel 2', yt: 'GCUybdjE-pE' },
        { id: 3, title: 'Performance Showreel 3', yt: 'zDX8cVhZpwo' },
        { id: 4, title: 'Shortfilm', yt: 'xGSqUbN1k1g' },
    ];

    return (
        <section id="portfolio" className="section container">
            <motion.div
                className="section-header text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="tagline">Showcase</span>
                <h2>Portfolio & Reels</h2>
            </motion.div>

            <div className="portfolio-filters flex-center">
                <button
                    className={`filter-btn ${activeTab === 'Photos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Photos')}
                >
                    Photos
                </button>
                <button
                    className={`filter-btn ${activeTab === 'Videos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Videos')}
                >
                    Videos / Reels
                </button>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    {activeTab === 'Photos' ? (
                        <div className="masonry-grid glow-photos">
                            {photos.map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    className={`masonry-item item-${index % 3 === 0 ? 'tall' : 'wide'}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <img src={photo.url} alt={`Portfolio ${index + 1}`} className="portfolio-image" loading="lazy" />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="video-grid">
                            {videos.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    className="video-card glass-card"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    onClick={() => setSelectedVideo(video)}
                                >
                                    <div className="video-thumbnail-container">
                                        <img
                                            src={`https://img.youtube.com/vi/${video.yt}/maxresdefault.jpg`}
                                            alt={video.title}
                                            className="video-thumbnail"
                                            loading="lazy"
                                        />
                                        <div className="play-button-overlay">
                                            <div className="play-button-pulse"></div>
                                            <Play size={28} className="play-icon" color="white" fill="white" />
                                        </div>
                                    </div>
                                    <h3 className="video-title">{video.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        className="video-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            className="video-modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="video-modal-close" onClick={() => setSelectedVideo(null)}>
                                <X size={28} />
                            </button>
                            <div className="video-modal-iframe-container">
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideo.yt}?autoplay=1&rel=0`}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MediaGallery;
