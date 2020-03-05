import React from 'react';
import Home from './home/Home'
import CartProvider from './contexts/CartProvider.js'
import Order from './home/Order'
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
        {/* <Order/> */}
      </CartProvider>
    </div>
  );
}

export default App;
