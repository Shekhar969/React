import React, { useState } from "react";
import Style from "./main.module.css";
import Gif from "../assets/1.gif"; // Ensure this path is correct

function FormSide() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track submission state

  const btnClicked = () => {
    setSubmitted(true); // Set submitted state to true
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      {!submitted ? ( 
        <div className={Style.formCointener}>
          <h1>Let's Talk</h1>
          <input 
            type="text" 
            value={name} 
            placeholder="Your Full Name" 
            onChange={nameChange} 
          />
          <input 
            type="text"  
            placeholder="Your Email" 
          />
          <textarea placeholder="Your Message" />
          <button onClick={btnClicked}>Submit</button>
        </div>
      ) : (
        <div className={Style.formConformation}>
          <h1>Hello {name} You Have Successfully Logged In</h1>
          <img src={Gif} alt="Confirmation GIF" />
        </div>
      )}
    </>
  );
}

export default FormSide;
