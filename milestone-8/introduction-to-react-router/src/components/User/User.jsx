import PropTypes from 'prop-types'; 

const User = ({user}) => {

    // console.log(user);
    console.log(Object.keys(user));

    const {id, name, email, phone} = user;
    console.log(id);

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
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;