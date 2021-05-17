import { useState } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Redirect  } from "react-router-dom";
import Key from './private/keys.js';

function CheckoutButton(props) {
  const [paymentComplete, completePayment] = useState(false)
  function handleToken(token, addresses) {
    console.log(token, addresses)
  }
  function onSuccess(response){
    completePayment(true)
  }

  let amount = props.amount * 100
  console.log(amount)
  console.log(props.user)
  if (paymentComplete){
    return  <Redirect to="/thank-you" />
  } else{
    return (
      <div>
        <StripeCheckout
        stripeKey={Key.stripe}
        token={handleToken}
        billingAddress={false}
        shippingAddress={false}
        email={props.email === null ? 'test@test.com' : props.email}
        currency="USD"
        amount={props.amount * 100}
        image={props.avatar}
        name={props.name} 
        token={onSuccess} />
      </div>
    );
  }
}


export default CheckoutButton;
