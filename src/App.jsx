import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <BrowserRouter>
          <div >
            <Navbar />
            <Switch>
              <Route exact path="/" component = {Home} />
              <Route path="/cart" component={Cart}/>
              <Route path="/about" component = {About} />
              <Route path="/contact" component = {Contact} />
              <Route path="/:product_id" component = {Products} />
            </Switch>
          </div>
      </BrowserRouter>
        <Footer />
      </div>
    )
  }
}


export default App