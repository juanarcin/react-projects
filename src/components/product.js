
function Product(props) {
  return (
    <li key={props.product.id} className="productBox">
      <div className="product-image"><img src={props.product.image} alt={props.product.title} /></div>
      <div className="content-width title">{props.product.title}</div>
      <div className="content-width price">{props.product.price}</div>
      <div className="content-width category">found in : {props.product.category}</div>
      <button>view full details</button>
    </li>
  );
}
export default Product;
