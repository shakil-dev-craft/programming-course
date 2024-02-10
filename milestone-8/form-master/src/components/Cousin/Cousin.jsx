import PropTypes from 'prop-types';

const Cousin = ({name}) => {
    console.log(typeof name);

    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
        </div>
    );
};

Cousin.propTypes = {
    name: PropTypes.string,
};

export default Cousin;