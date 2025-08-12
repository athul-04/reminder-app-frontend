import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useState } from "react";
import googleIcon from "../assets/GoogleIcon.jpg"; // <-- Add a Google logo in assets folder

export default function Login() {
    const [user, setUser] = useState<any>(null);

    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            console.log("User signed in:", result.user);
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        user ? (
            <div className="login-content">
                <h1>Welcome {user.displayName}</h1>
                <button onClick={handleSignOut}>Log Out</button>
            </div>
        ) : (
            <div className="login-content">
                <h1>Login</h1>
                <button className="google-btn" onClick={handleSignIn}>
                    <img src={googleIcon} alt="Google" />
                    <span>Sign in with Google</span>
                </button>
            </div>
        )
    );
}
