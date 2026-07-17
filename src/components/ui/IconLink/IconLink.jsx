import PropTypes from 'prop-types';
import './IconLink.css';

const IconLink = ({ href, label, icon: Icon, size = 'md', className = '' }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`icon-link icon-link--${size} ${className}`.trim()}
    >
        <Icon size={size === 'sm' ? 18 : 20} aria-hidden="true" />
    </a>
);

IconLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    size: PropTypes.oneOf(['sm', 'md']),
    className: PropTypes.string,
};

export default IconLink;
