import ProductContent from '../components/productContent.js';
import CartEditBar from '../components/cartEditBar.js';


function Product(props) {
  return (
    <li key={props.product.id} className="productBox">
      <div className="product-image"><img src={props.product.image} alt={props.product.title} /></div>
      <ProductContent product={props.product} />
      <CartEditBar product={props.product} />
    </li>
  );
}



export default Product;
