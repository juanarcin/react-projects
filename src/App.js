import './App.css';
import PaymentButton from './components/paymentPage.js'

function App() {
  function handleToken(token, addresses) {
    console.log(token, addresses)
  }
  return (
    <div>
      <PaymentButton />

    </div>
  );
}

export default App;
