import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const User = ({user}) => {

    // console.log(user);
    // console.log(Object.keys(user));

    const {id, name, email, phone} = user;
    // console.log(id);

    const userStyle = {
        border: '2px solid yellow',
        padding: '15px',
        borderRadius: '20px',
    };
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>

            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
            <Link to={`/user/${id}`}>
                <button className='bg-orange-400 text-white py-1 px-5 rounded-full mt-5'>Show Details</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;