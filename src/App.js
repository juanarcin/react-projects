import {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import NavBar from './components/navBar.js';
import Nav from './components/nav.js';
import Hero from './components/hero.js';

import Clothing from './pages/clothing.js';
import WomensClothing from './pages/womensClothing.js';
import MensClothing from './pages/mensClothing.js';
import Electronics from './pages/electronics.js';
import Jewelery from './pages/jewelery.js';
import Cart from './pages/cart.js';
import ProductPage from './pages/productPage.js';
import AllProducts from './pages/allProducts.js';
import Login from './pages/login.js';
import Checkout from './pages/checkout.js';
import Home from './pages/home.js';
import TEST from './components/TEST.js'
import Test from './components/reduxTest.js'

function App(props) {
  const [loading, setLoading] = useState(true)

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then( res => res.json())
    .then( json => {
      let productsList = {clothing:[], electronics: [], jewelery: []}
      json.forEach(function(item){
        let dollarAmount = (Math.round(item.price * 100) / 100).toFixed(2);
        item.price = dollarAmount;
        item.qty = 0;
        item.total = 0;
        item.inCart = false;
        item.itemsInCart = 0;
        props.addToAllProducts(item)
        if(item.category === 'women\'s clothing' || item.category === 'men\'s clothing'){
          productsList.clothing.push(item) 
        } else {
          productsList[item.category].push(item)
        }
      })
      props.addProducts(productsList)
      setLoading(false)
      console.log(productsList)
    })
    .finally(function(){
      console.log()
    })
  }, [])

  if (loading){
    return (
      <div>
        <NavBar />
        Loading Store
      </div>
    );
  }
  else {

    return (
      <div>
        <NavBar />
        <Route exact path="/"><Hero /></Route>
        <div className="container">
          <div className="sidebar">
            <Nav />
          </div>
          <div className="content">
            <Switch>
              <Route path="/TEST"><TEST /></Route>
              <Route path="/clothing"><Clothing /></Route>
              <Route path="/womens-clothing"><WomensClothing /></Route>
              <Route path="/mens-clothing"><MensClothing /></Route>
              <Route path="/electronics"><Electronics /></Route>
              <Route path="/jewelery"><Jewelery /></Route>
              <Route path="/cart"><Cart /></Route>
              <Route path="/products/:id"><ProductPage /></Route>
              <Route path="/all-products"><AllProducts /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/checkout"><Checkout /></Route>
              <Route path="/"><Home /></Route>
              <Route path="/TEST"><TEST /></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProducts: (products) => { dispatch({type: 'ADD_PRODUCTS', products: products }) },
    addToAllProducts: (product) => { dispatch({type: 'ADD_TO_ALL_PRODUCTS', product: product }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
