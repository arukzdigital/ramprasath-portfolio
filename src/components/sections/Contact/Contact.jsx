import { Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { contact, socials } from '../../../content/site';
import Section from '../../ui/Section/Section';
import SectionHeader from '../../ui/Section/SectionHeader';
import Reveal from '../../ui/Reveal/Reveal';
import IconLink from '../../ui/IconLink/IconLink';
import { SOCIAL_ICONS } from '../../ui/socialIcons';
import './Contact.css';

const contactMethods = [
    { id: 'email', icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { id: 'phone', icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, '')}` },
    {
        id: 'whatsapp',
        icon: FaWhatsapp,
        label: 'WhatsApp',
        value: contact.phone,
        href: `https://wa.me/${contact.whatsappNumber}`,
    },
];

const Contact = () => (
    <Section id="contact" className="contact">
        <SectionHeader eyebrow="Get In Touch" title="Let's Connect" />

        <Reveal as="p" className="contact__intro text-center">
            Available for Feature Films, Theatre productions, and Digital Media projects.
            Reach out for collaborations and casting details.
        </Reveal>

        <div className="contact__list">
            {contactMethods.map((method, index) => (
                <Reveal key={method.id} as="a" delay={index * 0.08} href={method.href} className="contact__row" target={method.id === 'whatsapp' ? '_blank' : undefined} rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}>
                    <span className="contact__row-label">
                        <method.icon size={18} aria-hidden="true" />
                        {method.label}
                    </span>
                    <span className="contact__row-value">{method.value}</span>
                </Reveal>
            ))}
        </div>

        <Reveal className="contact__socials">
            {socials.map((social) => (
                <IconLink key={social.id} href={social.href} label={social.label} icon={SOCIAL_ICONS[social.id]} />
            ))}
        </Reveal>
    </Section>
);

export default Contact;
