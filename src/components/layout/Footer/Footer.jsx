import { ArrowUp } from 'lucide-react';
import { profile } from '../../../content/site';
import Container from '../../ui/Container/Container';
import './Footer.css';

const Footer = () => (
    <footer className="site-footer">
        <Container className="site-footer__inner">
            <p className="site-footer__copy">&copy; {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
            <a href="#top" className="site-footer__top back-to-top" aria-label="Back to top">
                Back to top
                <ArrowUp size={16} aria-hidden="true" />
            </a>
        </Container>
    </footer>
);

export default Footer;
