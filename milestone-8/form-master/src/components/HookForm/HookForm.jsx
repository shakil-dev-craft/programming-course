
import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleChange] = useInputState('');
    const emailState = useInputState('');
    


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data ', emailState.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleChange} className="outline-none border mb-5 rounded-full px-4 py-1" type="text" name="name" placeholder="Type your name ..." />
                <br /> */}
                <input {...emailState} className="outline-none border mb-5 rounded-full px-4 py-1" type="email" name="email"  placeholder="Type your email ..." />
                <br />
                <input className="outline-none border mb-5 rounded-full px-4 py-1" type="password" name="password"  placeholder="Password" required />
                {/* {
                error && <p>{error}</p>
                } */}
                <br />
                <button type="btn" className="bg-red-600 text-white py-1 px-5 rounded-full">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;