const initState = {
	navOpen: false,
	allProducts: [],
	products:{},
	shoppingCart:[],
	shoppingCartTotal: 0,
	itemsInCart: 0
}
const rootReducer = (state = initState, action) => {
	function countItemsInCart(){
		let productQty = []
		state.shoppingCart.forEach(function(i){
			productQty.push(i.qty)
		})
		return productQty.reduce((a, b) => a + b, 0)
	}
	function calculateTotal(update){
		let itemPrices = []
    update.forEach(function(i){
    	let itemTotal = i.price * i.qty;
    	console.log(itemTotal)
    	i.total = itemTotal;
      itemPrices.push(parseFloat(itemTotal));
    })

    let total =  itemPrices.reduce((a, b) => a + b, 0)
		state.shoppingCartTotal = parseFloat(total)
		state.itemsInCart = countItemsInCart()
	}

	if(action.type === 'ADD_PRODUCTS'){
		return{
			...state,
			products: action.products
		}
	}


	if(action.type === 'ADD_TO_ALL_PRODUCTS'){
		let products = [...state.allProducts]
		products.push(action.product)
		return{
			...state,
			allProducts: products
		}
	}


	if(action.type === 'DELETE_PRODUCT'){
		let index = state.shoppingCart.findIndex(product => product.id === action.id)
		state.shoppingCart[index].inCart = false;
		let cart = state.shoppingCart.filter(product => {
			return action.id !== product.id
		})
		calculateTotal(cart)
		return{
			...state,
			shoppingCart: cart
		}
	}


	if(action.type === 'ADD_TO_CART'){
		let index = state.allProducts.findIndex(product => product.id === action.product.id) 
		state.allProducts[index].inCart = true;
		action.product.inCart = true;
		// create array snapshot of current shopping cart
		let cart = state.shoppingCart
		// add new item object to array
		action.product.qty = action.product.qty + 1
		cart.push(action.product)
		// cart now has all items. time to calculate
		calculateTotal(cart)
		console.log(state)
		return{
			...state,
			shoppingCart: cart
		}
	}


	if(action.type === 'UPDATE_QTY'){
		let qty = parseInt(action.qty, 10)
		let cartItems = state.shoppingCart
		let shoppingCartIndex = cartItems.findIndex(product => product.id === action.id);
		cartItems[shoppingCartIndex].qty = qty
		calculateTotal(cartItems)
		return{
			...state,
			shoppingCart: cartItems
		}
	}


	if(action.type === 'TOGGLE_NAV'){
		let updateNav
		state.navOpen ? updateNav = false : updateNav = true;

		return{
			...state,
			navOpen: updateNav
		}
	}
	return state
}

export default rootReducer;

