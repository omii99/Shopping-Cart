import React from "react";
import data from "./data.js";

import "./App.css";
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from './Screens/CartScreen';
import { BrowserRouter, Route, Link } from 'react-router-dom';
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/" >Shopping Cart</Link>

          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>

          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
        </button>

          <ul>
            <li>
              <a href="index.html">Men</a>
            </li>

            <li>
              <a href="index.html">Women</a>
            </li>
            <li>
              <a href="index.html">Kids</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
