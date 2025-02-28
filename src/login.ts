import React from "react";

// Apple Sign In Button
import { Button } from "react-native";
import { appleAuth } from "@invertase/react-native-apple-authentication";

const AppleSignInButton = () => {
    const onAppleButtonPress = async () => {
            try {
                const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
            });
    // Handle the response (e.g., authenticate the user with your server)
        console.log(appleAuthRequestResponse);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Button
        title="Sign in with Apple"
        onPress={onAppleButtonPress}
        />
    );
};

export default AppleSignInButton;

// Google Sign In OAuth Provider
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";


ReactDOM.createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
        <App /> 
    </GoogleOAuthProvider>
);

// Google Sign In Button
import { GoogleLogin } from "@react-oauth/google";

function SignIn() {
    const handleSuccess = (credentialResponse) => {
        console.log("Google login successful", credentialResponse);
    };

    const handleError = () => {
        console.log("Google login failed");
    };

    return (
        <GoogleLogin
        onSuccess={handleSuccess}
        onFailure={handleError}
        />
    );
}
// cusomtizable Google Sign In Button
// import React from "react";
// import { useGoogleLogin } from "@react-oauth/google";

// function CustomLoginButton() {
//     const googleLogin = useGoogleLogin({
//         onSuccess: (tokenResponse) => {
//             console.log("Google login successful", tokenResponse);
//         },
//         onError: () => {
//             console.error("Google login failed");
//         },
//             flow: "auth-code" // Use 'auth-code' for the authorization code flow
//         });

//     return <button onClick={googleLogin}>Sign in with Google 🚀</button>;
// }

// Microsoft Sign In Button
import { MsalProvider } from "@azure/msal-react";
import msalConfig from "./authConfig";
// initialize MSAL instance
const msalInstance = new msal.PublicClientApplication(msalConfig);

function App() {
    return (
        <MsalProvider instance={msalInstance}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </MsalProvider>
    );
}
// create a sign-in button
function SignInButton() {
    const { instance } = useMsal();

    const handleSignIn = () => {
        instance.loginPopup({
            scopes: ["user.read"]
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return <button onClick={handleSignIn}>Sign In with Microsoft</button>;
}

export default SignInButton;

// add the button to the display
import SignInButton from "./SignInButton";

function App() {
    return (
        <div>
        <SignInButton />
        </div>
    );
}

export default App;
