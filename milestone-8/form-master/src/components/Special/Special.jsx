import PropTypes from 'prop-types';

const Special = ({asset}) => {
    // console.log(asset);
    return (
        <div>
            <h2>Special</h2>
            <p>Has: {asset}</p>
        </div>
    );
};

Special.propTypes = {
    asset: PropTypes.string,
};

export default Special;