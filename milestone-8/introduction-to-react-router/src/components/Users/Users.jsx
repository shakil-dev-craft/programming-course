import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    // state --> data
    // state --> loaded data
    // use effect
    // fetch --> state set --> set state

    const users = useLoaderData();
    // console.log(users || {});

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                users?.map((user, index) => <User key={index} user={user} />)
            }
            </div>
        </div>
    );
};

export default Users;