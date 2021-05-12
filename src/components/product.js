import {useState} from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { FaInfoCircle, FaTrash } from 'react-icons/fa';

function Product(props) {
  const [price, updatePrice] = useState(props.product.price)
    let total = 0;

  function storePrices(){
    let itemPrices = []
    props.shoppingCart.forEach(function(i){
      itemPrices.push(parseFloat(i.price))
    })
    return itemPrices
  }
  function getTotal(){
    let prices = storePrices()
    let finalPrice = prices.reduce((a, b) => a + b, 0)
    total = finalPrice;
  }
  getTotal()

  let imageStyles = {
    width: 100
  }

  function handleDelete(id){
    props.deleteProduct(id)
    getTotal();
  }
  function handleOnChange(e){
    if (e <= 0){
      alert('help')
    }
    let qty = e;
    let updatedPrice = qty * props.product.price
    let finalPrice = (Math.round(updatedPrice * 100) / 100).toFixed(2)
    updatePrice(finalPrice)
  }
  return (
    <li key={props.product.id} className="productBox">
      <div className="product-image"><img src={props.product.image} alt={props.product.title} /></div>
      <div className="product-info">
        <div className="content-width title">{props.product.title}</div>
        <div className="content-width price">{props.product.price}</div>
        
        <div className="details">
          <Link to={`products/${props.product.id}`} ><FaInfoCircle /> view full details</Link>
        </div>
      </div>  
      <div className="add-to-cart bright" onClick={() => props.addToCart(props.product)}>Add to Cart</div>
      <div className="cart-adjust">
        <span className="trash"><FaTrash onClick={() => props.delete(props.product.id)} /></span>
        <div class="edit-cart">
          Qty: <input min="1" placeholder="1" className="qty" type="number" onChange={e => handleOnChange(e.target.value)} />
          <div className="item-total">total: ${price}</div>
          <p>{price}</p>
        </div>
      </div>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => { dispatch({type: 'DELETE_PRODUCT', id: id }) },
    addToCart: (product) => { dispatch({type: 'ADD_TO_CART', product: product }) }
  }
}
const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
