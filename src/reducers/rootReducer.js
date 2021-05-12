const initState = {
	navOpen: false,
	allProducts: [],
	products:{},
	shoppingCart:[]
}
const rootReducer = (state = initState, action) => {
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
		console.log(action.id)
		console.log(state.shoppingCart)
		let newCart = state.shoppingCart.filter(product => {
			return action.id !== product.id
		})

		return{
			...state,
			shoppingCart: newCart
		}
	}
	if(action.type === 'ADD_TO_CART'){
		console.log(state)
		return{
			...state,
			shoppingCart: [
				...state.shoppingCart,
				action.product
			]
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

