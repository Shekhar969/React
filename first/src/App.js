import logo from './logo.svg';
import cat from './cat.gif'
import './App.css';

function App() {

  let names =["Shekhar","????"]
  
  return (
    <div className="App">
      <header className='headerClass' >Welcome To React Classes </header>
      <h1  className='h1Class'>Here We Will Learn About The Working Principles Of React</h1>
      <a className='ancherClass' href='https://www.facebook.com/'> Its an Anker Tag </a>
      <button>Button</button>
      <img src={cat}  alt='Cat'/>

      <div className='Cardes'>
        {names?.map((name) => {
        return <div> {names}</div>;
        })}
      </div>

    </div>
  );
}

export default App;
