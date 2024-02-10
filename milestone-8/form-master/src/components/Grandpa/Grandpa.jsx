import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

const AssetContent = createContext('Gold');

const Grandpa = () => {
    const asset = 'daimond';

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContent.Provider value="gold">
                <section className="flex">
                    <Dad asset={asset} />
                    <Uncle asset={asset} />
                    <Aunty />
                </section>
            </AssetContent.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a content and export it
 * 2. Add providerr for the context with a value.
 * 
 */