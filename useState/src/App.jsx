import { useState } from "react";

function App() {
  const [num, numState] = useState(10);
  const [name, nameState] = useState("dev");
  const [age, ageState] = useState(18);
  const [resource,resourceState]=useState('Angular')


  const myStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin:'30px',
    paddig:'50px',
    fontSize:'25px'
  };

  function decrementBtn() {
    numState((prevNum) => prevNum - 1);
  }

  function incrementBtn() {
    numState((prevNum) => prevNum + 1);
  }

  function changeName(e) {
    nameState(e.target.value);
  }

  function incrementAge() {
    ageState((prevAge) => prevAge + 1);
  }

  return (
    <div style={myStyle}>
      <button onClick={decrementBtn}>-</button>
      <span> {num} </span>
      <button onClick={incrementBtn}>+</button>

      <br />

      <input 
        type="text"
        value={name}
        onChange={changeName}
      />

      <button onClick={incrementAge}>Increment Age</button>

      <br />
      <span>Hello {name}, you are currently {age} years old</span>



      <div>

        <button onClick={()=>{resourceState("Angular")}}>Angular</button>
        <button onClick={()=>{resourceState("React")}}>React</button>
        <button onClick={()=>{resourceState("HTML")}}>HTML</button>

      </div>
        <span>{resource}</span>
    </div>
  );
}

export default App;
