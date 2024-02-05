import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const Post = ({post}) => {

    console.log(post || {});

    const {id, title} = post || {};

    const postStyle = {
        border: '2px solid yellow',
        padding: '15px',
        borderRadius: '20px',
    };

    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <h1>Title: {title}</h1>
            <Link to={`/post/${id}`}>
                <button className='bg-orange-400 text-white py-1 px-5 rounded-full mt-5'>Show Details</button>
            </Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;