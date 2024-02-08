
const SimpleForm = () => {

    const handleSimpleForm = (e) => {
        e.preventDefault();
        // console.log('Simple Form submitted!');
        const name = e.target.name.value;
        const email = e.target.email.value;
        const info = {name, email};
        console.log(info);
        // console.log(e.target.name.value);
    };

    return (
        <div>
            <form onSubmit={handleSimpleForm}>
                <input className="outline-none border mb-5 rounded-full px-4 py-1" type="text" name="name" placeholder="Type your name ..." />
                <br />
                <input className="outline-none border mb-5 rounded-full px-4 py-1" type="email" name="email" id="" placeholder="Type your email ..." />
                <br />
                <button type="btn" className="bg-red-600 text-white py-1 px-5 rounded-full">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;