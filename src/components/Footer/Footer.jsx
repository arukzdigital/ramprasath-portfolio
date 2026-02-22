import React from 'react';
import { Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content glass-card">
                    <div className="footer-brand">
                        <h2>Ram Prasath.T</h2>
                        <p className="text-muted">Professional Actor based in Chennai, available for Feature Films, Theatre, and Digital Media.</p>
                    </div>

                    <div className="footer-contact">
                        <h3>Get in Touch</h3>
                        <div className="contact-item">
                            <Phone size={20} className="accent-text" />
                            <div>
                                <a href="tel:+919566871226">+91 95668 71226</a> <br />
                                <a href="tel:+916383843409">+91 63838 43409</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Mail size={20} className="accent-text" />
                            <a href="mailto:raamprasath10@gmail.com">raamprasath10@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom text-muted">
                    <p>&copy; {new Date().getFullYear()} Ram Prasath.T. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
