import {useState} from 'react';
import { connect } from 'react-redux';

function Product(props) {
  const [price, updatePrice] = useState(props.product.total)

  function handleUpdate(value, id){
    props.updateQty(value, id)
    console.log(props.product)
    updatePrice(value)
  }
  return (
    <span>
    	Qty: 
    	<input 
      	min="1" 
      	value={props.product.qty} 
      	className="qty" 
      	type="number" 
      	onChange={e => handleUpdate(e.target.value, props.product.id)} 
    	/>
    	<div className="item-total">total: ${parseFloat(props.product.total).toFixed(2)}</div>
    </span>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQty: (qty, id) => {dispatch({type: 'UPDATE_QTY', qty: qty, id: id})}
  }
}

export default connect(null, mapDispatchToProps)(Product);
