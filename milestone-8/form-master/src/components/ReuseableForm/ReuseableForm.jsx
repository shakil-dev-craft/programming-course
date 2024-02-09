import PropTypes from 'prop-types';

const ReuseableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit', children}) => {

    console.log(children || {});

    const handleLocalSubmit = (e) => {
        e.preventDefault();

        // information objects
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        handleSubmit(data);
    };

    return (
        <div>
            <h1 className="font-bold mb-5">{formTitle}</h1>

            {children}
            
            <form onSubmit={handleLocalSubmit}>
                <input className="outline-none border mb-5 rounded-full px-4 py-1" type="text" name="name" placeholder="Type your name ..." />
                <br />
                <input className="outline-none border mb-5 rounded-full px-4 py-1" type="email" name="email" placeholder="Type your email ..." />
                <br />
                <input className="outline-none border mb-5 rounded-full px-4 py-1" type="password" name="password" placeholder="Password" />
                <br />
                <button type="btn" className="bg-red-600 text-white py-1 px-5 rounded-full">{submitBtnText}</button>
            </form>
        </div>
    );
};

ReuseableForm.propTypes = {
    formTitle: PropTypes.string,
    handleSubmit: PropTypes.func,
    submitBtnText: PropTypes.string,
    children: PropTypes.object
};

export default ReuseableForm;