import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
    variant = 'primary',
    as,
    href,
    icon: Icon,
    children,
    className = '',
    ...rest
}) => {
    const classes = `btn btn--${variant} ${className}`.trim();
    const content = (
        <>
            {Icon && <Icon size={18} aria-hidden="true" />}
            <span>{children}</span>
        </>
    );

    if (href) {
        return (
            <a href={href} className={classes} {...rest}>
                {content}
            </a>
        );
    }

    const Tag = as || 'button';
    return (
        <Tag className={classes} {...rest}>
            {content}
        </Tag>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'ghost']),
    as: PropTypes.elementType,
    href: PropTypes.string,
    icon: PropTypes.elementType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Button;
