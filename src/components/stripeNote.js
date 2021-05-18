import { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

function CheckOut(props) {
  const [noteVisible, hideNote] = useState(true)

  if(noteVisible){
  	return (
        <div className="left stripe-note">
  				<div className="close-note right"><FaWindowClose onClick={() => hideNote(false)} /></div>
          <div className="center">*note: this shop is in Stripe Test Mode. To see it in action please use the number 42 repeatedly - </div><br />
          card:  4242 4242 4242 4242<br />
          exp: 04/24<br />
          cvc: 242
        </div>
  	)
  } else {
  	return null;
  }
}


export default CheckOut;
