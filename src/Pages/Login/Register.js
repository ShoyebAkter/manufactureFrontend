import React from 'react';



const Register = () => {
    return (
        <div className="form-container sign-up-container">
                <form className="form" action="#">
                    <h1 className="form-title">Hello, Friend!</h1>

                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="form-button">sign up</button>
                </form>
            </div>
    );
};

export default Register;