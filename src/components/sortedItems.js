import { connect } from 'react-redux';
import Product from '../components/product.js';

function SortedItems(props) {


  function shuffle() {
    var currentIndex = props.products.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = props.products[currentIndex];
      props.products[currentIndex] = props.products[randomIndex];
      props.products[randomIndex] = temporaryValue;
    }

    return props.products;
  }

  let products = shuffle()

  return (
    <ul id="products-list">
     {products.map( product => {
        return (
            <Product product={product} key={product.id} />
        )
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.allProducts
  }
}

export default connect(mapStateToProps)(SortedItems);
