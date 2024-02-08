import { useState } from "react";

const StatefulForm = () => {

    // form validation by state
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password?.length < 6) {
            setError('Password must be at least 6 characters or longer');
        }else{
            console.log(name, email, password);
            setError('');
        }
    };

    const handleNameChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} className="outline-none border mb-5 rounded-full px-4 py-1" type="text" name="name" placeholder="Type your name ..." />
                <br />
                <input onChange={handleEmailChange} className="outline-none border mb-5 rounded-full px-4 py-1" type="email" name="email"  placeholder="Type your email ..." />
                <br />
                <input onChange={handlePasswordChange} className="outline-none border mb-5 rounded-full px-4 py-1" type="password" name="password"  placeholder="Password" required />
                {
                error && <p>{error}</p>
                }
                <br />
                <button type="btn" className="bg-red-600 text-white py-1 px-5 rounded-full">Submit</button>
            </form>
        </div>
    );
};

export default StatefulForm;