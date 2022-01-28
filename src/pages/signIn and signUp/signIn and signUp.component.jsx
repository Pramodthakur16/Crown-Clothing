import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signIn and signUp.styles.scss';

const SignInAndSignUpPage = () => (
    <div className="signIn-and-signUp">
        <SignIn />
        <SignUp />
        </div>
);

export default SignInAndSignUpPage;