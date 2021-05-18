import { Link } from "react-router-dom";

function ProductPage(props) {
  return (
      <Link to={`./${props.item.id}`} >
      	<img  src={props.item.image} alt={`item ${props.item.id}`}/>
      </Link>
  );
}
export default ProductPage;
