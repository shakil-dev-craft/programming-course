import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContent } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContent);
    // console.log(money);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Mamshad'} />
                <Cousin name={'Rubaiya'} />
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;