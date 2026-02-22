import React from 'react';
import { motion } from 'framer-motion';
import { User, Activity, MapPin, Globe } from 'lucide-react';
import './About.css';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
    };

    return (
        <section id="about" className="section container">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <h2 className="gradient-text">Personal Details</h2>
                <div className="underline"></div>
            </motion.div>

            <motion.div
                className="grid grid-2 about-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants} className="glass-card flex-column">
                    <div className="card-icon"><Activity size={24} /></div>
                    <h3>Physical Attributes</h3>
                    <ul className="details-list">
                        <li><span>Age</span> 30</li>
                        <li><span>Height</span> 175cm (5.8 Ft)</li>
                        <li><span>Weight</span> 70 kg</li>
                        <li><span>Complexion</span> Wheatish</li>
                        <li><span>Hair / Eye Color</span> Black</li>
                    </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="glass-card flex-column">
                    <div className="card-icon"><User size={24} /></div>
                    <h3>Measurements</h3>
                    <ul className="details-list">
                        <li><span>Shirt Size</span> 38</li>
                        <li><span>Pant Size</span> 32</li>
                        <li><span>Shoe Size</span> 8 inch</li>
                    </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="glass-card flex-column">
                    <div className="card-icon"><MapPin size={24} /></div>
                    <h3>Location</h3>
                    <ul className="details-list">
                        <li><span>Native</span> Thanjavur</li>
                        <li><span>Current</span> Guindy, Chennai</li>
                    </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="glass-card flex-column">
                    <div className="card-icon"><Globe size={24} /></div>
                    <h3>Skills & Info</h3>
                    <ul className="details-list">
                        <li><span>Languages</span> Tamil, English</li>
                        <li><span>Driving</span> Two & Four Wheeler</li>
                        <li><span>Education</span> BE- Mechanical Engineer</li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
