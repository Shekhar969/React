// liked ? 'liked' : 'did not like'
// liked ? 'if' : 'else'

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [num, numState] = useState(10);
  const [name, nameState] = useState("dev");
  const [age, ageState] = useState(18);



  function decrementBtn() {
    // numState(num-1)
    numState((prevnum) => prevnum - 1);
  }

  function incrementBtn() {
    numState(num + 1);
  }

  function changeName(e){
        nameState(e.target.value)
  }

  function incrementAge(){
    ageState(pervAge => pervAge +1)
  }
  return (
    <>
      <button onClick={decrementBtn}>-</button>
      <span> {num} </span>
      <button onClick={incrementBtn}>+</button>

      <br />

        <input 
        type="text"
        value={name}
        onChange={changeName}
         />

        <button onClick={incrementAge}>IncrementAge</button>

        <br />
        <span>Hello {name} Your are Curently {age} year's Old</span>


    </>
  );
}

export default App;
