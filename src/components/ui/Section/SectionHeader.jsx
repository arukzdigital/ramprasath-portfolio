import PropTypes from 'prop-types';
import Reveal from '../Reveal/Reveal';
import './SectionHeader.css';

const SectionHeader = ({ eyebrow, title, align = 'center' }) => (
    <Reveal className={`section-header section-header--${align}`}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
    </Reveal>
);

SectionHeader.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['center', 'left']),
};

export default SectionHeader;
