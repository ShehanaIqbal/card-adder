import React from 'react';
import './button.css';
import Loginform from './loginForm';
import './Login.css';
import Navbar from './Navbar.js';


const Login = (props) => {
    return(
        <div>
            <Navbar></Navbar>
            <div className='loginblock'>
                <Loginform props={props}></Loginform>
            </div>
        </div>
        
    )
}

export default Login;