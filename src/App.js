import React from 'react';
import Home from './index/Home'
import CartProvider from './contexts/CartProvider.js'
import Order from './order/Order'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <CartProvider>
          <Switch>
            <Route path="/order">
              <Order />
            </Route>
            <Route path={["/", "home"]}>
              <Home />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
