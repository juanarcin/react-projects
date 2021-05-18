import { connect } from 'react-redux';
import { FaTrash } from 'react-icons/fa';

import Qty from '../components/updateQty.js';

function Product(props) {
  return (
    <div className="cart-adjust">
      <span className="trash"><FaTrash onClick={() => props.delete(props.product.id)} /></span>
      <div className="edit-cart">
        <Qty product={props.product} />
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => { dispatch({type: 'DELETE_PRODUCT', id: id }) },
  }
}

export default connect(null, mapDispatchToProps)(Product);
