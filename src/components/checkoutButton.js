import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import Key from './private/keys.js';

function CheckoutButton(props) {
  function handleToken(token, addresses) {
    console.log(token, addresses)
  }

  let amount = props.amount * 100
  console.log(amount)
  console.log(props.user)
  return (
    <div>
      <StripeCheckout
      stripeKey={Key.stripe}
      token={handleToken}
      billingAddress={false}
      shippingAddress={false}
      email={props.user.email}
      currency="USD"
      amount={amount}
      name={props.user.fullName} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    amount: state.shoppingCartTotal,
  }
}

export default connect(mapStateToProps)(CheckoutButton);
