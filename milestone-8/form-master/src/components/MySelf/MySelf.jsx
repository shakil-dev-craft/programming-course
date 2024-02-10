import Special from "../Special/Special";
import PropTypes from 'prop-types';

const MySelf = ({asset}) => {
    // console.log(asset);
    return (
        <div>
            <h2>My Self</h2>
            <section className="flex">
                <Special asset={asset} />
            </section>
        </div>
    );
};

MySelf.propTypes = {
    asset: PropTypes.string,
};

export default MySelf;