import { useState } from "react";
import plusSign from "../assets/plusSign.png"; 
import "./AddReminder.css";
import PopupForm from "./PopupForm";




export default function AddReminder() {
  function addSingleReminder() {
    console.log("Add a new reminder");
  }
  const [seen, setSeen] = useState<Boolean>(false);
  function togglePop () {
        setSeen(!seen);
  };

  return(
    <div>
      <div onClick={()=>togglePop()} >
          <img src={plusSign} alt="" className="plus-sign"/>
      </div>
      {seen ? <PopupForm toggle={togglePop} /> : null}
    </div>
  )
}