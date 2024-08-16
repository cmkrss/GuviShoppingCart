import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    if(isAdded){
      remove();
    } else {
      add();
    }
    setIsAdded(!isAdded);
  };

  function add(){
      setCount((count) => count +1)
  }
  function remove(){
    setCount((count) => count -1)
  }

  return (
    <>
    
      <div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Shop </a></li>
          
          <li><button>cart {count}</button></li>
        </ul>
      </nav>
        
      </div>
      <div>
      <h1>Shop in style</h1>
      <h4>with this shophomepage template</h4>
      </div>

      <div className='container'>

        {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add Cart {count}
        </button>
      </div> */}
      
      <div className="card">
        <button onClick={handleClick}>
          {isAdded ? 'Remove' : 'add'}
          
        </button>
      </div>

      <div className="card">
        <button onClick={handleClick}>
          {isAdded ? 'Remove' : 'add'}
          
        </button>
      </div>

      <div className="card">
        <button onClick={handleClick}>
          {isAdded ? 'Remove' : 'add'}
          
        </button>
      </div>

      <div className="card">
        <button onClick={handleClick}>
          {isAdded ? 'Remove' : 'add'}
          
        </button>
      </div>

      <div className="card">
        <button onClick={handleClick}>
          {isAdded ? 'Remove' : 'add'}
          
        </button>
      </div>
      </div>

      <div className="card">
        <button onClick={handleClick}>
          {isAdded ? 'Remove' : 'add'}
          
        </button>
      </div>

      

    </>
  )
}

export default App


