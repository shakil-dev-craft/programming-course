import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContent = createContext('Gold');
export const MoneyContent = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'daimond';

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <MoneyContent.Provider value={[money, setMoney]}>
                <AssetContent.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset} />
                        <Uncle asset={asset} />
                        <Aunty />
                    </section>
                </AssetContent.Provider>
            </MoneyContent.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a content and export it
 * 2. Add providerr for the context with a value.
 * 3. 
 */