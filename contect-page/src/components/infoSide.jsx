import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaFacebook, IoMdMail } from "react-icons/fa";


function InfoSide() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis
        exercitationem quos unde. Corrupti neque, consequatur tenetur architecto
        non porro corporis eveniet eum fugiat rem. Necessitatibus blanditiis
        expedita sequi quasi.
      </p>

      <p><FaMapMarkerAlt /> Bhansi-3</p>
      <p><FaPhoneAlt /> +977 979924516</p>
      <p><IoMdMail /> shekharrawal96@gmail.com</p>
      <span>
      <a href="https://github.com/Shekhar969" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/shekhar.rawal.16" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a></span>
    </div>
  );
}

export default InfoSide;
