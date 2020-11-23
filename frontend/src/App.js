import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="row">
            <div>
               <a className="brand" href="/">
                  <img src="/images/logo.png" alt="Koparoo" width="100" height="75"/>
               </a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="/login">Log In</a>
              <a href="/register">Register</a>
            </div>            
            </header>
            <main>
            <Route path="/product/:id" component={ProductScreen}></Route>
              <Route path="/" component={HomeScreen} exact></Route>

            </main>
            <footer className="row right">Koparoo 2020</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
