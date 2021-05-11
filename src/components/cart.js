import { connect } from 'react-redux';

function Cart(props) {

  let imageStyles = {
    width: 100
  }

  function handleDelete(id){
    props.deleteProduct(id)
    console.log(id)
  }

  if(props.shoppingCart <= 0){
    return <p>Your cart is empty</p>
  } else {
    return (
      <div>
        {props.shoppingCart.map( product => {
          return (
            <li key={product.id}>
              <div>{product.title}</div>
              <div>{product.price}</div>
              <div>{product.description}</div>
              <div>{product.category}</div>
              <div><img src={product.image} alt={product.title} style={imageStyles} /></div>
              <button onClick={() => handleDelete(product.id)}>delete</button>
            </li>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => { dispatch({type: 'DELETE_PRODUCT', id: id }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
