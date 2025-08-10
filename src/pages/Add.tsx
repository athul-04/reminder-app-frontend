import { useNavigate } from "react-router-dom";

export default function Add() {
    const navigate = useNavigate();
    return(
        <>
            <h1>Home2 Page</h1>
            <button onClick={()=>navigate("..")}>Home2 Button</button>
        </>
    );
}