import './App.css';
import PaymentButton from './components/private/paymentPage.js';
import Cart from './components/cart.js';

function App(props) {
  console.log(props)

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  return (
    <div>
      <Cart />

    </div>
  );
}


export default App;
