import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import Bubbles from '../../bubble';

import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import Logo_Design from "../../images/logo_bg.png";
import Logo_Name from "../../images/name_logo.png";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn =() => {
        //sign in...
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
       })
        .catch((error) => alert(error.message));
    };
    return (

     <div className="login">
        <div className="login__logo">
        <Bubbles />

        <img
        src={Logo_Design}
        alt="FACBOOT LOGO"
        />

        <img
        src={Logo_Name}
        alt="FACBOOT LOGO NAME"
        />
        </div>        

        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
    );
}

export default Login;