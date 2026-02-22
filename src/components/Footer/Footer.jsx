import React from 'react';
import { Mail, Phone, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer-section section container">
            <div className="footer-wrapper text-center">
                <h2 className="footer-title">Let's Connect</h2>
                <p className="about-bio text-muted" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Available for Feature Films, Theatre productions, and Digital Media projects. Reach out for collaborations and casting details.
                </p>

                <div className="contact-cards">
                    <a href="mailto:raamprasath10@gmail.com" className="contact-card glass-card">
                        <Mail size={24} className="contact-icon" />
                        <span className="contact-label">Email</span>
                        <span className="contact-value" style={{ wordBreak: 'break-all' }}>raamprasath10@gmail.com</span>
                    </a>

                    <div className="contact-card glass-card">
                        <Phone size={24} className="contact-icon" />
                        <span className="contact-label">Phone</span>
                        <div className="flex-column" style={{ textAlign: 'center', gap: '0.5rem' }}>
                            <a href="tel:+919566871226" className="contact-value">+91 95668 71226</a>
                            <a href="tel:+916383843409" className="contact-value">+91 63838 43409</a>
                        </div>
                    </div>
                </div>

                <div className="social-links flex-center">
                    <a href="https://www.instagram.com/ramprasath.t/" className="social-icon" aria-label="Instagram">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="social-icon" aria-label="YouTube">
                        <Youtube size={20} />
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ram Prasath.T. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
