import React from 'react';
import Home from './index/Home'
import CartProvider from './contexts/CartProvider.js'
import Order from './order/Order'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducers';
const store = createStore(rootReducer)

const App = () => {

  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
