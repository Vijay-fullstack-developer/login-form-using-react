import Header from "./Header";
import { useState } from "react";

export default function Loginform() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const validateInputs = () => {
        let isValid = true;
        setUsernameError(false);
        setPasswordError(false);

        if (username.length < 8) {
            setUsernameError(true);
            isValid = false;
        }

        if (password.length < 8 || !/^[a-zA-Z0-9]+$/.test(password)) {
            setPasswordError(true);
            isValid = false;
        }

        return isValid;
    };

    const handleLogin = () => {
        if (validateInputs()) {
            // Handle successful login logic here
            console.log('Login successful');
            window.location.reload();
        }
    };

    return (
        <>
            <Header />
            <div className="username1">
                <div className="header-1">
                    <h1 className='main-title'>Login Form</h1>
                </div>
                <div className="username container-cell">
                    <div className="containers">
                        <div className="input">
                            <span id="name-id">User name</span>
                            <input 
                                id="input_name" 
                                type="text" 
                                placeholder="User name" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{ borderColor: usernameError ? 'red' : '' }}
                            /><br/>
                        </div>
                        
                        <div className="input const">
                            <span id="pwd">Password</span>
                            <input 
                                id="Input_password" 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ borderColor: passwordError ? 'red' : '' }}
                            />
                        </div>
                        {/* <div className="input New-person">
                            <a href="https://support.google.com/mail/answer/41078">Forgot password</a>
                        </div> */}
                        <div className="input">
                            <button type="button" onClick={handleLogin}>Login</button>
                        </div>
                        <div className="New-person add-flex">
                            <a href="/register">New register</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
