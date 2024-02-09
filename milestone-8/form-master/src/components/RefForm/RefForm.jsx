import { useEffect, useRef, useState } from "react";

const RefForm = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    // validate password
    const [error, setError] = useState();

    const handleRefForm = (e) => {
        e.preventDefault();
        if(passwordRef?.current?.value?.length < 6) {
            setError('Please enter a password at least 6 characters');
        }else{
            console.log(nameRef?.current?.value);
            console.log(emailRef?.current?.value);
            console.log(passwordRef?.current?.value);
            setError('');
        }
    };

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    console.log(error);

    return (
        <div>
            <form onSubmit={handleRefForm}>
                <input ref={nameRef} className="outline-none border mb-5 rounded-full px-4 py-1" type="text" name="name" placeholder="Type your name ..." />
                <br />
                <input ref={emailRef} className="outline-none border mb-5 rounded-full px-4 py-1" type="email" name="email" id="" placeholder="Type your email ..." />
                <br />
                <input ref={passwordRef} className="outline-none border mb-5 rounded-full px-4 py-1" type="password" name="password" id="password" placeholder="Password" required />
                {
                    error && <p>{error}</p>
                }
                <br />
                <button type="btn" className="bg-red-600 text-white py-1 px-5 rounded-full">Submit</button>
            </form>
        </div>
    );
};

export default RefForm;