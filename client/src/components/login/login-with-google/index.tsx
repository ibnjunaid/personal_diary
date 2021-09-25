import { GoogleLogin } from "react-google-login";

import "./index.scss";
export function LoginWithGoogle(params: Object) {
    return (
        <GoogleLogin
            clientId="363336576338-cdn32827l9fthvubbhpenn98eb649lsd.apps.googleusercontent.com"
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
        />
    );
}

const handleLogin = async (googleData : any) => {
    const res = await fetch("auth/callback", {
        method: "POST",
        body: JSON.stringify({
            token: googleData.tokenId,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    console.log(data)
    // store returned user somehow
};
