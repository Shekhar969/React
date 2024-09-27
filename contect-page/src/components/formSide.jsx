import React from "react";
import Style from "./main.module.css";
import { useState } from "react";

function FormSide() {
  const [name,nameState]=useState()

  const btnClicked=()=>{

  }
  
  const nameChange=(e)=>{
    nameState(e.target.value)
  }
  return (
    <div className={Style.formCointener}>
      <h1>Lets talk</h1>
      <input type="text" value={name} placeholder="Your Full Name" onChange={nameChange} />
      <input type="text"  placeholder=" Your Email" />
      <textarea placeholder="Your Message" />
      <button onClick={btnClicked}>Submit</button>
    </div>
  );
}

export default FormSide;
