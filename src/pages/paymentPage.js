// this is a sample of my checkoutButton component. 
// my real button is in a private folder for security
// reasons. It is added to the git ignore file to avoid 
// publicly publishing credentials.

import StripeCheckout from 'react-stripe-checkout'

function checkoutButton() {
  function handleToken(token, addresses) {
    console.log(token, addresses)
  }
  return (
    <div>
      <StripeCheckout
      stripeKey="stripe provided Publishable key goes here"
      token={handleToken}
      billingAddress={true}
      shippingAddress={true}
      amount={9905} />

    </div>
  );
}

export default checkoutButton;
