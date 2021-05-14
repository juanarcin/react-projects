import { connect } from 'react-redux';
import Product from '../components/product.js';
import SortedItems from '../components/sortedItems.js';

function Home(props) {

  return (
    <div id="home">
      <SortedItems />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    allProducts: state.allProducts
  }
}

export default connect(mapStateToProps)(Home);
