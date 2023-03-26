import React, { useEffect, useRef, useState } from "react";
import { fetchProducts } from "../redux/shoppingReducer";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/productItem";
import LoadingSpinner from "../components/loader";

const Homepage = ({ searchValue }) => {
	const productRef = useRef(false);
	const mainState = useSelector((state) => state.shopping);
	const isLoading = mainState.isLoading;
	const dispatch = useDispatch();
	useEffect(() => {
		if (productRef.current) return;
		productRef.current = true;
		dispatch(fetchProducts());
	}, []);
	return (
		<div className="products">
			{!isLoading && mainState.products.length > 1 ? (
				mainState.products
					.filter((item) => {
						return searchValue.toLowerCase() === ""
							? item
							: item.title.toLowerCase().includes(searchValue);
					})
					.map((item) => {
						return <ProductItem productdata={item} key={item.id} />;
					})
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
};

export default Homepage;
