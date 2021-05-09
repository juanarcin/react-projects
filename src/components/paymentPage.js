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
