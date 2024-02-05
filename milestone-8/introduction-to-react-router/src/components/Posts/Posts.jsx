import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {

    // Load data
    const posts = useLoaderData();
    console.log(posts || []);

    return (
        <div>
            <p>Posts: {posts?.length}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    posts?.map(post => <Post key={post?.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;