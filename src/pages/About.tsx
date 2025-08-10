import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
    const navigate = useNavigate();
    useEffect(() => {
    fetch("https://poc-flask-firebase.onrender.com/")
      .then((res) => res.json()) // if the API returns JSON
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
    return(
        <>
            <h1>About Page</h1>
            <button onClick={()=>navigate("/")}>Home Button Button</button>
        </>
    );
}