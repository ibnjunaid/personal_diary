import { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from 'react-router-dom';

import { StateContext } from "../../../App";

import "./index.scss";

export function LoginWithGoogle(prop: Object) {
    const StateContextN = useContext(StateContext)
    const history = useHistory();

    return (
        <GoogleLogin
            clientId="363336576338-cdn32827l9fthvubbhpenn98eb649lsd.apps.googleusercontent.com"
            buttonText="Log in with Google"
            onSuccess={(googleData) =>{
                handleLogin(googleData, StateContextN, history);
            }}
            // onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
        />
    );
}

const handleLogin = async (googleData: any , StateContextN: any, history: any) => {
    const res = await fetch("/api/auth/signin", {
        method: "POST",
        body: JSON.stringify({
            token: googleData,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    // console.log(data);

    StateContextN.dispatch({type:'setUser', value:{ ...data.user, isSecretsConfigured : data.isSecretsConfigured}})

    localStorage.setItem('token',data.token)
    localStorage.setItem('userName', data.user.userName)

    if( data.isSecretsConfigured ){
        history.push('/entry');
    } else {
        history.push('/newUser');
    }
    // store returned user somehow
};
