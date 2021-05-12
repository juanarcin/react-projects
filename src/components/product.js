import {useState} from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { FaInfoCircle, FaTrash } from 'react-icons/fa';

function Product(props) {
  const [inCart, addToCart] = useState()
  const [price, updatePrice] = useState(props.product.total)
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
  function handleUpdate(value, id){
    props.updateQty(value, id)
    updatePrice(value)
  }
  function addItemToCart(product, id){
    if(!props.product.inCart){
      props.addToCart(product)
      addToCart(id)
    }
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
      <div className={props.product.inCart === false ? 'add-to-cart bright' : 'add-to-cart bright in-cart'} onClick={() => addItemToCart(props.product, props.product.id)}>
        {props.product.inCart === false ? 'Add to Cart' : 'Added to Cart'}
      </div>
      <div className="cart-adjust">
        <span className="trash"><FaTrash onClick={() => props.delete(props.product.id)} /></span>
        <div className="edit-cart">
          Qty: <input min="1" value={props.product.qty} className="qty" type="number" onChange={e => handleUpdate(e.target.value, props.product.id)} />
          <div className="item-total">total: ${parseFloat(props.product.total).toFixed(2)}</div>
        </div>
      </div>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => { dispatch({type: 'DELETE_PRODUCT', id: id }) },
    addToCart: (product) => { dispatch({type: 'ADD_TO_CART', product: product }) },
    updateQty: (qty, id) => {dispatch({type: 'UPDATE_QTY', qty: qty, id: id})}
  }
}
const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
