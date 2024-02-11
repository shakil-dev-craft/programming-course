import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AssetContent } from '../Grandpa/Grandpa';

const Special = ({asset}) => {
    // console.log(asset);

    const gift = useContext(AssetContent);

    return (
        <div>
            <h2>Special</h2>
            <p>Has: {asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

Special.propTypes = {
    asset: PropTypes.string,
};

export default Special;