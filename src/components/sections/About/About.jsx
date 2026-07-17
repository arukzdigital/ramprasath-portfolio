import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import aboutImg from '../../../assets/portraits/about.jpg';
import aboutImgWebp from '../../../assets/portraits/about.webp';
import { profile } from '../../../content/site';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import Section from '../../ui/Section/Section';
import SectionHeader from '../../ui/Section/SectionHeader';
import Reveal from '../../ui/Reveal/Reveal';
import './About.css';

const About = () => {
    const prefersReducedMotion = useReducedMotion();

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 25 });
    const springY = useSpring(y, { stiffness: 200, damping: 25 });
    const rotateX = useTransform(springY, [-0.5, 0.5], ['4deg', '-4deg']);
    const rotateY = useTransform(springX, [-0.5, 0.5], ['-4deg', '4deg']);

    const handleMouseMove = (e) => {
        if (prefersReducedMotion) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Section id="about" className="about">
            <div className="about__grid">
                <Reveal className="about__portrait-wrap">
                    <motion.div
                        className="about__portrait"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={prefersReducedMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
                    >
                        <picture>
                            <source srcSet={aboutImgWebp} type="image/webp" />
                            <img src={aboutImg} alt={`${profile.fullName} portrait`} loading="lazy" />
                        </picture>
                    </motion.div>
                </Reveal>

                <div className="about__content">
                    <SectionHeader eyebrow="About" title="About Me" align="left" />

                    {profile.bio.map((paragraph, index) => (
                        <Reveal key={index} as="p" delay={index * 0.1} className="about__bio">
                            {paragraph}
                        </Reveal>
                    ))}

                    <Reveal className="about__specs" delay={0.2}>
                        {profile.specs.map((spec) => (
                            <div key={spec.label} className="about__spec">
                                <span className="about__spec-value">{spec.value}</span>
                                <span className="about__spec-label">{spec.label}</span>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </div>
        </Section>
    );
};

export default About;
