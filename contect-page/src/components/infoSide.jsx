import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Style from "./main.module.css"; // Adjust the path if necessary

function InfoSide() {
  return (
    <div className={Style.infoContainer}>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis
        exercitationem quos unde. Corrupti neque, consequatur tenetur architecto
        non porro corporis eveniet eum fugiat rem. Necessitatibus blanditiis
        expedita sequi quasi.
      </p>

      <p className={Style.icons}>
        <FaMapMarkerAlt /> <span className={Style.Text}>Bhansi-3</span>
      </p>
      <p className={Style.icons}>
        <FaPhoneAlt /> <span className={Style.Text}>+977 979924516</span>
      </p>
      <p className={Style.icons}>
        <IoMdMail />{" "}
        <span className={Style.Text}>shekharrawal96@gmail.com</span>
      </p>
      <span>
        <a
          className={Style.icons}
          href="https://github.com/Shekhar969"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className={Style.icons}
          href="https://www.facebook.com/shekhar.rawal.16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </span>
    </div>
  );
}

export default InfoSide;
