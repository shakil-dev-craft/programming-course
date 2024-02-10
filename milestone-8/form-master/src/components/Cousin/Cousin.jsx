import PropTypes from 'prop-types';
import Special from '../Special/Special';

const Cousin = ({name, asset}) => {
    // console.log(typeof name);

    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                { asset && <Special asset={asset} />}
            </section>
        </div>
    );
};

Cousin.propTypes = {
    name: PropTypes.string,
    asset: PropTypes.string,
};

export default Cousin;