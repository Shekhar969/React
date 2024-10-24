import React from "react";
import Styles from "./App.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react"; 

function App() {
  const [selectedDate, setDate] = useState(null);

  const setselecteddate = (date) => {
    setDate(Date);
  };

  const minDate= new Date("2023-01-11")
  const maxDate= new Date("2023-05-11")


  return (
    <div>
      <div className={Styles.mainCointainer}>
        <h1>Hello Here You Can Select date</h1>

        <DatePicker
          selected={selectedDate}
          onChange={setselecteddate}
          dateFormet="MM/DD/YYYY"
          minDate={minDate}
          maxDate={maxDate}   
        />
      </div>
    </div>
  );
}

export default App;
