import { experience } from '../../../content/experience';
import Section from '../../ui/Section/Section';
import SectionHeader from '../../ui/Section/SectionHeader';
import Reveal from '../../ui/Reveal/Reveal';
import './Experience.css';

const Experience = () => (
    <Section id="experience" className="experience section--alt">
        <SectionHeader eyebrow="Journey" title="Acting Experience" />

        <div className="experience__list">
            {experience.map((group, index) => (
                <Reveal key={group.category} as="div" delay={index * 0.08} className="experience__row">
                    <h3 className="experience__category">{group.category}</h3>
                    <ul className="experience__credits">
                        {group.credits.map((credit) => (
                            <li key={credit.title} className="experience__credit">
                                <span className="experience__credit-title">{credit.title}</span>
                                {(credit.role || credit.year) && (
                                    <span className="experience__credit-meta">
                                        {[credit.role, credit.year].filter(Boolean).join(' · ')}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            ))}
        </div>
    </Section>
);

export default Experience;
