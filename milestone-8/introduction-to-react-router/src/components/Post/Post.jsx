import PropTypes from 'prop-types'; 
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    // console.log(post || {});

    const {id, title} = post || {};

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        padding: '15px',
        borderRadius: '20px',
    };

    // event handlers
    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    };

    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <h1>Title: {title}</h1>
            <Link to={`/post/${id}`}>
                <button className='bg-orange-400 text-white py-1 px-5 rounded-full mt-5 mr-1'>Show Details</button>
            </Link>
            <button onClick={handleShowDetails} className='bg-red-500 text-white py-1 px-5 rounded-full'>Click to see details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;