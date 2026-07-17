import PropTypes from 'prop-types';
import Container from '../Container/Container';

const Section = ({ id, className = '', children, ...rest }) => (
    <section id={id} className={`section ${className}`.trim()} {...rest}>
        <Container>{children}</Container>
    </section>
);

Section.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Section;
