import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

// Centralizes the scroll-in-view fade/rise animation used across every
// section, and turns it off automatically for prefers-reduced-motion.
const Reveal = ({
    as = 'div',
    children,
    delay = 0,
    y = 28,
    duration = 0.7,
    once = true,
    className,
    ...rest
}) => {
    const prefersReducedMotion = useReducedMotion();
    const MotionTag = motion[as] ?? motion.div;

    if (prefersReducedMotion) {
        const Tag = as;
        return (
            <Tag className={className} {...rest}>
                {children}
            </Tag>
        );
    }

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: '-80px' }}
            transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
            {...rest}
        >
            {children}
        </MotionTag>
    );
};

Reveal.propTypes = {
    as: PropTypes.string,
    children: PropTypes.node,
    delay: PropTypes.number,
    y: PropTypes.number,
    duration: PropTypes.number,
    once: PropTypes.bool,
    className: PropTypes.string,
};

export default Reveal;
