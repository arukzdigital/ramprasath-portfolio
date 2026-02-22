import React from 'react';
import { motion } from 'framer-motion';
import { Film, Clapperboard, MonitorPlay } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            category: "Feature Films",
            icon: <Film size={32} />,
            items: ["Pechi", "Mayavalai"]
        },
        {
            category: "Theatre",
            icon: <Clapperboard size={32} />,
            items: ["Tharama Tallya"]
        },
        {
            category: "Short Films",
            icon: <MonitorPlay size={32} />,
            items: ["Vegumathi"]
        }
    ];

    return (
        <section id="experience" className="section container">
            <div className="glow-orb" style={{ top: '20%', right: '-20%', background: 'radial-gradient(circle, rgba(0, 150, 255, 0.2) 0%, rgba(0,0,0,0) 70%)' }}></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <h2 className="gradient-text">Acting Experience</h2>
                <div className="underline"></div>
            </motion.div>

            <div className="exp-timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="exp-item glass-card"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className="exp-icon">
                            {exp.icon}
                        </div>
                        <div className="exp-content">
                            <h3>{exp.category}</h3>
                            <ul>
                                {exp.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="interests-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h3>Areas of Interest</h3>
                <div className="pills">
                    <span className="pill glass-card">Feature Films</span>
                    <span className="pill glass-card">TV Serials / Web Series</span>
                    <span className="pill glass-card">Advertisements</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
