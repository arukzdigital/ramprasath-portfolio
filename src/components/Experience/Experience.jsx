import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            category: "Feature Films",
            roles: ["Pechi", "Mayavalai"]
        },
        {
            category: "Theatre",
            roles: ["Tharama Tallya"]
        },
        {
            category: "Short Films",
            roles: ["Vegumathi"]
        }
    ];

    return (
        <section id="experience" className="section container">
            <motion.div
                className="section-header text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="tagline">Journey</span>
                <h2>Acting Experience</h2>
            </motion.div>

            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="exp-row"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="exp-category">
                            <h3>{exp.category}</h3>
                        </div>
                        <div className="exp-roles">
                            {exp.roles.map((role, i) => (
                                <span key={i} className="role-tag">{role}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
