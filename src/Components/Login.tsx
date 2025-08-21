/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import CircularProgress from '@mui/joy/CircularProgress';
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import googleIcon from "../assets/GoogleIcon.jpg"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const registerAndCheckUser = async () => {
                try {
                    // 1️⃣ Register user in backend
                    await axios.post("https://reminder-app-backend-jgtj.onrender.com/registerUser", {
                        uid: user.uid,
                        username: user.displayName,
                        email: user.email,
                    });

                    // 2️⃣ Get user from backend
                    const res = await axios.get("https://reminder-app-backend-jgtj.onrender.com/getUser", {
                        params: { uid: user.uid },
                    });

                    const userData = res.data;
                    console.log("Fetched user data:", userData);

                    // 3️⃣ Decide where to navigate
                    if (userData.chatId === null) {
                        navigate(`/instructions/${user.uid}`);
                    } else {
                        navigate(`/reminders/${user.uid}`);
                    }
                } catch (error) {
                    console.error("Error in register/check flow:", error);
                }
            };

            registerAndCheckUser();
        }
    }, [user]);

    const handleSignIn = async () => {
        try {
            // ✅ Create provider with force account selection
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({
                prompt: "select_account", 
            });

            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            console.log("User signed in:", result.user);

        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    // const handleSignOut = async () => {
    //     try {
    //         await signOut(auth);
    //         setUser(null);
    //     } catch (error) {
    //         console.error("Error signing out:", error);
    //     }
    // };

    return (
        user ? (
            <CircularProgress color="neutral" determinate={false} size="lg" value={22} variant="solid" />
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
