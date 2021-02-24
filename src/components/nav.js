import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './home';
import Cart from './cart';
import Deals from './deals';



function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <NavLink className="navbar-brand" exact to="/">Mini-Store</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink exact to="/" activeClassName="selected" 
                    activeStyle={{
                        textDecoration: "underline"
                      }}>Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/deals" activeClassName="selected" 
                activeStyle={{
                    textDecoration: "underline"
                  }}>Deals</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/cart" activeClassName="selected" 
                activeStyle={{
                    textDecoration: "underline"
                  }}>Cart</NavLink>
                </li>
                </ul>
            </div>

            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/deals">
                <Deals />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
          </Switch>
        </nav>
        
    );
  }
  
  export default Nav;
