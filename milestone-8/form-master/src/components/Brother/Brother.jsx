import { useContext } from "react";
import { MoneyContent } from "../Grandpa/Grandpa";

const Brother = () => {
    const [money] = useContext(MoneyContent);

    return (
        <div>
            <h2>Brother</h2>
            <p>Money: {money}</p>
        </div>
    );
};

export default Brother;