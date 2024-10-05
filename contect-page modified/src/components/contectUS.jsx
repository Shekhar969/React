import React from 'react';
import InfoSide from './infoSide';
import FormSide from './formSide';
import Style from './main.module.css';

function ContactUS() {
  return (
    <div className={Style.mainContainer}>
      <div className={Style.infoSide}><InfoSide /></div>
      <div className={Style.formSide}><FormSide /></div>
    </div>
  );
}

export default ContactUS;
