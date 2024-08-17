
import { useState } from 'react';
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);
  
  const products = ['prd1', 'prd2', 'prd3', 'prd4', 'prd5', 'prd6','prd7','prd8'];

  const handleClick = (productId) => {
    setCart(prevCart => {
      const isProductAdded = prevCart[productId] || false;
      
      // Toggle product state
      const updatedCart = {
        ...prevCart,
        [productId]: !isProductAdded,
      };
      
      // Update count
      const newCount = Object.values(updatedCart).filter(Boolean).length;
      setCount(newCount);
      
      return updatedCart;
    });
  };

  return (
    <>
      <div>
        <nav className="navbar">
          <ul>
            <li><a href="#home" >Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Shop </a></li>
            
          </ul>
          <ul>
          <li><button>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span> Cart {count} </span>
            </button></li>
          </ul>
        </nav>
      </div>

      <div className='banAdd'>
        <h1>Shop in style</h1>
        <p>with this shophomepage template</p>
      </div>

      <div className='container'>
        {products.map(productId => (
          <div className="card" key={productId}>
            <button onClick={() => handleClick(productId)}>
              {cart[productId] ? 'Remove' : 'Add'}
            </button>
          </div>
        ))}
      </div>

    </>
  );
}

export default App;
