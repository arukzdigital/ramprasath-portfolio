import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './MediaGallery.css';

const MediaGallery = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Portraits', 'Stills'];

    // Using elegant placeholders that match the theme until HD photos arrive
    const photos = [
        { id: 1, category: 'Portraits', title: 'Headshot', url: '' },
        { id: 2, category: 'Stills', title: 'Mid-shot', url: '' },
        { id: 3, category: 'Portraits', title: 'Full-shot', url: '' },
        { id: 4, category: 'Stills', title: 'Editorial', url: '' },
    ];

    const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="section container">
            <motion.div
                className="section-header text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="tagline">Gallery</span>
                <h2>Portfolio</h2>
            </motion.div>

            <div className="portfolio-filters flex-center">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div
                className="masonry-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={filter} // Re-animate on filter change
            >
                {filteredPhotos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        className={`masonry-item item-${index % 2 === 0 ? 'tall' : 'wide'}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        {/* Real img tag can go here, using a styled placeholder for now */}
                        <div className="photo-placeholder">
                            <span>{photo.title}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default MediaGallery;
