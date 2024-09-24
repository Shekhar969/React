import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'


function App() {
return(
  <>
  <Link to={"/"}>Home</Link>
  <br />
  <Link to={"/blogs"}>Blogs</Link>
  </>
)
}

export default App
