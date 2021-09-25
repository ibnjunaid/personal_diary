import './index.scss';
export function LoginWithGoogle(params: Object) {
    return (
    <>
        <div id="g_id_onload"
            data-client_id="363336576338-cdn32827l9fthvubbhpenn98eb649lsd.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="popup"
            data-login_uri="http://localhost:3000">
        </div>

        <div className="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="outline"
            data-text="signin_with"
            data-size="large"
            data-logo_alignment="left">
        </div>
    </>
    )
}