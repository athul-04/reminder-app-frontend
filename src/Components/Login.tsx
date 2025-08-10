import { signInWithPopup,signOut } from "firebase/auth";
import { auth } from "../firebase";
import { provider } from "../firebase";

import { useState } from "react";


export default function Login(){
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


    return(
        user ?(
            <div>
                <h1>Welcome {user.displayName}</h1>
                <button onClick={handleSignOut}>Log Out</button>
            </div>
        ):(
            <div>
                <h1>Login</h1>
                <button onClick={handleSignIn}>Sign In with Google</button>
            </div>

        )
    )
}