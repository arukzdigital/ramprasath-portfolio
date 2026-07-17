import { ChevronDown } from 'lucide-react';
import heroImg from '../../../assets/portraits/hero.jpg';
import heroImgWebp from '../../../assets/portraits/hero.webp';
import { profile } from '../../../content/site';
import Reveal from '../../ui/Reveal/Reveal';
import Button from '../../ui/Button/Button';
import './Hero.css';

const Hero = () => (
    <section id="top" className="hero">
        <div className="hero__media">
            <picture>
                <source srcSet={heroImgWebp} type="image/webp" />
                <img
                    src={heroImg}
                    alt={`${profile.fullName}, actor`}
                    fetchPriority="high"
                />
            </picture>
            <div className="hero__scrim" aria-hidden="true" />
        </div>

        <Reveal as="blockquote" className="hero__quote" delay={0.3}>
            {profile.quote}
        </Reveal>

        <div className="hero__content">
            <Reveal delay={0.05}>
                <span className="eyebrow">{profile.role}</span>
            </Reveal>
            <Reveal delay={0.15} as="h1" className="hero__name">
                {profile.fullName}
            </Reveal>
            <Reveal delay={0.25}>
                <p className="hero__tagline">{profile.tagline}</p>
            </Reveal>
            <Reveal delay={0.35} className="hero__actions">
                <Button href="#reel" variant="primary">Watch The Reel</Button>
                <Button href="#contact" variant="ghost">Get In Touch</Button>
            </Reveal>
        </div>

        <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
            <span>Scroll</span>
            <ChevronDown size={16} aria-hidden="true" />
        </a>
    </section>
);

export default Hero;
