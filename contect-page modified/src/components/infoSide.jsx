import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Style from "./main.module.css"; 

function InfoSide() {
  return (
    <div className={Style.infoContainer}>
      <h1>Contact</h1>
      <p className={Style.contectsummary}>
        Connecting with us is an opportunity to enhance your experience. Whether
        you have questions, feedback, or ideas, we value your input. Your
        insights not only help us improve but also allow us to tailor our
        services to better meet your needs. We’re committed to providing
        exceptional support and fostering a collaborative relationship. Don’t
        hesitate to reach out—let’s embark on this journey together!
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
      <p>
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
      </p>
    </div>
  );
}

export default InfoSide;
