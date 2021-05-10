const initState = {
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





	if(action.type === 'DELETE_PRODUCT'){
		console.log('test')
		let newCart = state.shoppingCart.filter(product => {
			return action.id !== product.id
		})

		return{
			...state,
			shoppingCart: newCart
		}
	}
	return state
}

export default rootReducer;

