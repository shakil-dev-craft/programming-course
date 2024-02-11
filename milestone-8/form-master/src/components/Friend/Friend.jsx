import { useContext } from "react";
import { AssetContent } from "../Grandpa/Grandpa";

const Friend = () => {

    const gift = useContext(AssetContent);

    return (
        <div>
            <h2>Friend</h2>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Friend;