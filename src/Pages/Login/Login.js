import React, { useState } from 'react';
import LoginPage from './LoginPage';
import Overlay from './Overlay';
import Register from './Register';
import './Login.css'

const Login = () => {
    const [rightPanelActive,setRightPanelActive]=useState(false);
    const handleClickSignUpButton = () =>{
        setRightPanelActive(true);
    };

    const handleClickSignInButton = () =>{
        setRightPanelActive(false);
    };
    return (
        <div className="App mb-6">
                <div
                    className={`container ${rightPanelActive ? `right-panel-active` : ``}`}
                    id="container"
                >
                    <Register />
                    <LoginPage />
                    <Overlay
                        handleClickSignInButton={handleClickSignInButton}
                        handleClickSignUpButton={handleClickSignUpButton}
                    />
                </div>
            </div>
    );
};

export default Login;