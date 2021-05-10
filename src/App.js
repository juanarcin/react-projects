import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import PaymentButton from './components/private/paymentPage.js';
import Products from './components/products.js';
import Cart from './components/cart.js';
import NavBar from './components/navBar.js';

function App(props) {
  return (
    <div>
        <NavBar />
        <Switch>
          <Route path="/contact">'test</Route>
          <Route path="/work">   'test</Route>
          <Route path="/about">  'test</Route>
          <Route path="/">       'test</Route>
        </Switch>
      <Products />
      <Cart />

    </div>
  );
}


export default App;
