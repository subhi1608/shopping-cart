import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderBar from "./components/headerBar";
import Homepage from "./pages/homepage";
import ProductPage from "./pages/productPage";
import Cart from "./pages/userCart";

function App() {
	const [searchValue, setSearchValue] = useState("");
	return (
		<div>
			<HeaderBar setSearchValue={setSearchValue} />
			<Routes>
				<Route path="/" element={<Homepage searchValue={searchValue} />} />
				<Route path="/product/:id" element={<ProductPage />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
