const initState = {
	navOpen: false,
	allProducts: [],
	products:{},
	shoppingCart:[],
	shoppingCartTotal: 0,
	itemsInCart: 0,
	user:{
		loggedIn: false,
		name: null,
		profilePicture: null,
		fullName: null,
		email: null
	}
}
const rootReducer = (state = initState, action) => {

	function countItemsInCart(){
		//placeholder array for eachproduct
		let productQty = []
		//get qty per item and push into placeholder array
		state.shoppingCart.forEach(function(i){
			productQty.push(i.qty)
		})
		// grab total by reducing array and return it
		return productQty.reduce((a, b) => a + b, 0)
	}


	function calculateTotal(){
		// array to store each items price
		let itemPrices = []
		// grab price from each item
    state.shoppingCart.forEach(function(i){
    	// price is based on item price times qty of this item
    	let itemTotal = i.price * i.qty;
    	// set the total fo rthis specific item based on qty
    	i.total = itemTotal;
    	// store final price into array of prices
      itemPrices.push(parseFloat(itemTotal));
    })
    // reduce array of prices to get total
    let total =  itemPrices.reduce((a, b) => a + b, 0)
    // update cart total in state
		state.shoppingCartTotal = parseFloat(total)
		console.log('before: ', state)
		// count the amount of items in cart
		state.itemsInCart = countItemsInCart()
	}


	if(action.type === 'DELETE_PRODUCT'){
		// get the deleted object index form array of all objects
		let index = state.shoppingCart.findIndex(product => product.id === action.id)
		// update object to no longer be shown in cart
		state.shoppingCart[index].inCart = false;
		// return all objectsa that aren't the deleted one
		let updatedCart = state.shoppingCart.filter(product => {
			return action.id !== product.id
		})
		// update shopping cart in state before calculating
		state.shoppingCart = updatedCart;

		calculateTotal()

		return{
			...state,
			shoppingCart: updatedCart
		}
	}


	if(action.type === 'ADD_TO_CART'){
		// grab index of item 
		let index = state.allProducts.findIndex(product => product.id === action.product.id) 
		// update objects to show they are now in the cart
		state.allProducts[index].inCart = true;
		action.product.inCart = true;

		// add new item object to array
		action.product.qty = action.product.qty + 1

		// push product into cart array
		state.shoppingCart.push(action.product)

		// cart now has all items. time to calculate
		calculateTotal()
		return{
			...state
		}
	}


	if(action.type === 'UPDATE_QTY'){
		// convert qty to number
		let qty = parseInt(action.qty, 10)
		// get product index
		let productIndex = state.shoppingCart.findIndex(product => product.id === action.id);
		// go to product and update qty
		state.shoppingCart[productIndex].qty = qty

		calculateTotal()

		return{
			...state
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


	if(action.type === 'LOGIN'){
		if(action.name === 'LOGOUT'){
			state.user.loggedIn = false;
			state.user.name = null;
			state.user.profilePicture = null;
		} else {
			state.user.loggedIn = true;
			state.user.name = action.name;
			state.user.email = action.email;
			state.user.profilePicture = action.profilePicture;
		}
		console.log(state.user)
		return{
			...state,
		}
	}
	return state
}

export default rootReducer;

