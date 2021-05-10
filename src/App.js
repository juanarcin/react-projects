import {useEffect} from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import PaymentButton from './components/private/paymentPage.js';
import NavBar from './components/navBar.js';

import Clothing from './components/clothing.js';
import WomensClothing from './components/womensClothing.js';
import MensClothing from './components/mensClothing.js';
import Electronics from './components/electronics.js';
import Jewelery from './components/jewelery.js';
import Cart from './components/cart.js';
import Home from './components/home.js';

function App(props) {

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then( res => res.json())
    .then( json => {
      let productsList = {clothing:[], electronics: [], jewelery: []}
      json.forEach(function(item){
        if(item.category === 'women\'s clothing' || item.category === 'men\'s clothing'){
          productsList.clothing.push(item) 
        } else {
          productsList[item.category].push(item)
        }
      })
      console.log(productsList)
      props.addProducts(productsList)
    })
  }, [])

  return (
    <div>
        <NavBar />
        <Switch>
          <Route path="/clothing"><Clothing /></Route>
          <Route path="/womens-clothing"><WomensClothing /></Route>
          <Route path="/mens-clothing"><MensClothing /></Route>
          <Route path="/electronics"><Electronics /></Route>
          <Route path="/jewelery"><Jewelery /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProducts: (products) => { dispatch({type: 'ADD_PRODUCTS', products: products }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
