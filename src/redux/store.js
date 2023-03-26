import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingReducer";

export const store = configureStore({
	reducer: {
		shopping: shoppingReducer,
	},
});
