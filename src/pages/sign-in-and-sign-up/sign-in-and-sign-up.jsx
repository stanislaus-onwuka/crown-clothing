import React from "react";
import SignIn from '../../components/sign-in/sign-in';
import "../sign-in-and-sign-up/sign-in-and-sign-up.scss";
import "../../components/sign-up/sign-up";
import SignUp from "../../components/sign-up/sign-up";


const SignInAndSignUpPage = () =>(
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>

)

export default SignInAndSignUpPage;