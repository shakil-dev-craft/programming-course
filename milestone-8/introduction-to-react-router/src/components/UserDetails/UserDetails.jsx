import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    // load data
    const user = useLoaderData();
    // console.log(user);
    const {name, website} = user;

    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;