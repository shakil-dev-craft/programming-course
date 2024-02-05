import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post);
    const {title, body} = post || {};

    return (
        <div>
            <p>Post: {post?.id}</p>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;