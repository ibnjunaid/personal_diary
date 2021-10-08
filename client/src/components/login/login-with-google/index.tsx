import { useContext } from "react";
import { GoogleLogin } from "react-google-login";

import { StateContext } from "../../../App";

import "./index.scss";
export function LoginWithGoogle(prop: Object) {

    const StateContextN = useContext(StateContext)

    return (
        <GoogleLogin
            clientId="363336576338-cdn32827l9fthvubbhpenn98eb649lsd.apps.googleusercontent.com"
            buttonText="Log in with Google"
            onSuccess={(googleData) =>{
                handleLogin(googleData, StateContextN)
            }}
            // onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
        />
    );
}

const handleLogin = async (googleData: any , StateContextN: any) => {
    const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        body: JSON.stringify({
            token: googleData,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    StateContextN.dispatch({type:'setUser', value:{ ...data.user, isSecretsConfigured : data.isSecretsConfigured}})
    console.log(data)

    localStorage.setItem('token',data.token)
    localStorage.setItem('userName', data.user.userName)
    
    // store returned user somehow
};
