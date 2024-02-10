import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
                <MySelf />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Dad;