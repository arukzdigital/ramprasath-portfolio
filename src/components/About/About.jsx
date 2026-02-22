import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/1000268674.jpg.jpeg';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section container">
            <motion.div
                className="about-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="about-image-container">
                    <img src={profileImg} alt="Ram Prasath Profile" className="about-image" />
                    <div className="about-glow"></div>
                </div>

                <div className="about-content text-center">
                    <h2 className="section-title">About Me</h2>

                    <p className="about-bio">
                        I am Ram Prasath.T, a dedicated professional actor currently based in <strong>Chennai</strong>.
                        With a strong background in Mechanical Engineering, I found my true calling in the world of
                        performance arts. I specialize in bringing depth to characters in <strong>Feature Films</strong>,
                        <strong>Web Series</strong>, <strong>TV Serials</strong>, <strong>Commercials</strong>, and <strong>Theatre</strong>.
                    </p>

                    <div className="physical-specs flex-center">
                        <div className="spec-item">
                            <span className="spec-label">Height</span>
                            <span className="spec-value">175cm</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Weight</span>
                            <span className="spec-value">70kg</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Age</span>
                            <span className="spec-value">30</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Languages</span>
                            <span className="spec-value">Tamil, English</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
