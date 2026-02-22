import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import profileImg from '../../assets/1000289083.jpg.jpeg';
import './About.css';

const About = () => {
    // 3D Parallax Hover Effect state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="about" className="section container">
            <motion.div
                className="about-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="about-image-container"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                >
                    <img src={profileImg} alt="Ram Prasath Profile" className="about-image" style={{ transform: "translateZ(30px)" }} />
                    <div className="about-glow" style={{ transform: "translateZ(-30px) translate(-50%, -50%)" }}></div>
                </motion.div>

                <div className="about-content text-center">
                    <h2 className="section-title">About Me</h2>

                    <p className="about-bio">
                        I am Ram Prasath.T, a dedicated professional actor currently based in <strong>Chennai</strong>.
                        With a strong background in Mechanical Engineering, I found my true calling in the world of
                        performance arts. I specialize in bringing depth to characters in <strong>Feature Films</strong>,
                        <strong>Web Series</strong>, <strong>TV Serials / Commercials</strong>, and <strong>Theatre</strong>.
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
