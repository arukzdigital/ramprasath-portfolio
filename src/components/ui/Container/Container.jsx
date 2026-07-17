import PropTypes from 'prop-types';

const Container = ({ className = '', children, ...rest }) => (
    <div className={`container ${className}`.trim()} {...rest}>
        {children}
    </div>
);

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Container;
