import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post);
    const {title, body} = post || {};

    const navigate = useNavigate();
    const {postId} = useParams();
    console.log(postId);

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <p>Post: {post?.id}</p>
            <h1>{title}</h1>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;