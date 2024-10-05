import React from 'react'
import Styles from './App.module.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

function App() {

  const [selectedDate,setDate]=useState(null)

const setselecteddate =(date)=>{
  setDate(date);
}


  return (
    <div>
      <div className={Styles.mainCointainer}>
        <h1>Hello Here You Can Select date</h1>

        <DatePicker
        selected={selectedDate}
        onChange={setselecteddate}
        dateFormet="MM/DD/YYYY"
        />


      </div>
    </div>
  )
}

export default App