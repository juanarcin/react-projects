import {useEffect} from 'react';
import { connect } from 'react-redux';

function Products(props) {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then( res => res.json())
    .then( json => {
      let productsList = {clothing:[], electronics: [], jewelery: []}
      json.forEach(function(item){
        if(item.category === 'women\'s clothing' || item.category === 'men\'s clothing'){
          productsList.clothing.push(item) 
        } else {
          productsList[item.category].push(item)
        }
      })
      console.log(productsList)
      props.addProducts(productsList)
    })
  }, [])


  function handleDelete(id){
    props.deleteProduct(id)
  }


  return (
    <div>
      {Object.entries(props.products).map(([key, value]) => {
        return(
          value.map( product => {
            return (
              <li key={product.id} className="productBox">
                <div className="product-image"><img src={product.image} alt={product.title} /></div>
                <div className="content-width title">{product.title}</div>
                <div className="content-width description">{product.description}</div>
                <div className="content-width price">{product.price}</div>
                <div className="content-width category">found in : {product.category}</div>
              </li>
            )
          })
        )    
      })}
      

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProducts: (products) => { dispatch({type: 'ADD_PRODUCTS', products: products }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
