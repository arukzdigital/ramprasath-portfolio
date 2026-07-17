import { useEffect, useMemo, useState } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { navLinks, profile, contact, socials } from '../../../content/site';
import { useScrollSpy } from '../../../hooks/useScrollSpy';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { SOCIAL_ICONS } from '../../ui/socialIcons';
import Container from '../../ui/Container/Container';
import IconLink from '../../ui/IconLink/IconLink';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);
    const activeId = useScrollSpy(sectionIds);

    useLockBodyScroll(menuOpen);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <Container className="navbar__inner">
                <a href="#top" className="navbar__brand">
                    {profile.name}
                </a>

                <nav className="navbar__links" aria-label="Primary">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`navbar__link ${activeId === link.id ? 'is-active' : ''}`}
                            aria-current={activeId === link.id ? 'true' : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="navbar__contacts">
                    {socials.map((social) => (
                        <IconLink key={social.id} href={social.href} label={social.label} icon={SOCIAL_ICONS[social.id]} size="sm" />
                    ))}
                    <span className="navbar__divider" aria-hidden="true" />
                    <a href={`mailto:${contact.email}`} className="navbar__icon-link" aria-label="Email">
                        <Mail size={17} aria-hidden="true" />
                    </a>
                    <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="navbar__phone">
                        <Phone size={15} aria-hidden="true" />
                        {contact.phone}
                    </a>
                </div>

                <button
                    className="navbar__menu-toggle"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </Container>

            <nav
                id="mobile-menu"
                className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}
                aria-label="Mobile"
                aria-hidden={!menuOpen}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`navbar__mobile-link ${activeId === link.id ? 'is-active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}

                <div className="navbar__mobile-contacts">
                    <a href={`mailto:${contact.email}`} className="navbar__mobile-contact-row">
                        <Mail size={18} aria-hidden="true" />
                        {contact.email}
                    </a>
                    <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="navbar__mobile-contact-row">
                        <Phone size={18} aria-hidden="true" />
                        {contact.phone}
                    </a>
                    <div className="navbar__mobile-socials">
                        {socials.map((social) => (
                            <IconLink key={social.id} href={social.href} label={social.label} icon={SOCIAL_ICONS[social.id]} size="sm" />
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
