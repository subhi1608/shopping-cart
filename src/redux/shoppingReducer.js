import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	shoppingCart: [],
	singleProduct: null,
	isLoading: false,
};

const shoppingSlice = createSlice({
	name: "shopping",
	initialState,
	reducers: {
		productsList(state, action) {
			state.products = action.payload;
		},
		singleProductItem(state, action) {
			state.singleProduct = action.payload;
		},
		addProduct(state, action) {
			state.shoppingCart = [...state.shoppingCart, action.payload];
		},
		clearSingleProduct(state, action) {
			state.singleProduct = null;
		},
		handleProduct(state, action) {
			if (action.payload.type === "INCREMENT") {
				state.shoppingCart = state.shoppingCart.map((item) => {
					const { productData, qty } = item;
					if (productData.id === parseInt(action.payload.id)) {
						return { ...item, qty: qty + 1 };
					}
					return item;
				});
			} else {
				state.shoppingCart = state.shoppingCart.map((item) => {
					const { productData, qty } = item;
					if (productData.id === parseInt(action.payload.id) && qty > 0) {
						return { ...item, qty: qty - 1 };
					}
					return item;
				});
			}
		},
		isLoading(state, action) {
			state.isLoading = true;
		},
		isLoadingFalse(state, action) {
			state.isLoading = false;
		},
	},
});
export const {
	productsList,
	singleProductItem,
	addProduct,
	clearSingleProduct,
	handleProduct,
	isLoading,
	isLoadingFalse,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;

export const fetchProducts = () => async (dispatch) => {
	dispatch(isLoading());
	const response = await fetch("https://fakestoreapi.com/products");
	const jsonResponse = await response.json();
	dispatch(productsList(jsonResponse));
	dispatch(isLoadingFalse());
};

export const fetchSingleProduct = (productid) => async (dispatch) => {
	dispatch(isLoading());
	const response = await fetch(
		`https://fakestoreapi.com/products/${productid}`
	);
	const jsonResponse = await response.json();
	dispatch(singleProductItem(jsonResponse));
	dispatch(isLoadingFalse());
};
