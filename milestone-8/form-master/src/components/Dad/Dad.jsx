import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import PropTypes from 'prop-types';

const Dad = ({asset}) => {
    // console.log(typeof asset);

    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
                <MySelf asset={asset} />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

Dad.propTypes = {
    asset: PropTypes.string,
};

export default Dad;