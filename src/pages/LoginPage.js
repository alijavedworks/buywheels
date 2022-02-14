import React from 'react';
import HeaderBar from '../components/HeaderBar';
import './login.css';
import SigninPage from './SigninPage';
import SignupPage from './SignupPage';
const LoginPage = () => {
    return (<>
        <HeaderBar></HeaderBar>
        <div className='login-wrapper'>
            <div className='container' id='container'>
             <SigninPage></SigninPage>
                {/* <SignupPage></SignupPage> */}
            </div>
        </div>
        </>
    );
}

export default LoginPage;