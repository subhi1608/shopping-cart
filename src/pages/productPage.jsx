import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
	fetchSingleProduct,
	addProduct,
	clearSingleProduct,
} from "../redux/shoppingReducer";

const ProductPage = () => {
	const url = useLocation();
	const stateData = useSelector((state) => state.shopping);
	const cartData = stateData.shoppingCart;
	const productData = stateData.singleProduct;
	const productId = url?.pathname?.split("/")[2];
	const dispatch = useDispatch();
	const [addProductBtn, setAddProductBtn] = useState(true);
	useEffect(() => {
		if (productId) dispatch(fetchSingleProduct(productId));
		return () => {
			dispatch(clearSingleProduct());
		};
	}, [productId]);

	useEffect(() => {
		if (cartData && productId) {
			cartData.forEach((item) => {
				if (item.productData.id === parseInt(productId)) {
					setAddProductBtn(false);
				}
			});
		}
	}, [cartData, productId]);

	const handleAddToCart = () => {
		setAddProductBtn(false);
		dispatch(addProduct({ productData, qty: 1 }));
	};
	if (productData)
		return (
			<div className="product">
				<div className="product__image">
					<img src={productData.image} alt={productData.title} />
				</div>
				<div className="product__detail">
					<h1>{productData.title}</h1>
					<p>{productData.description}</p>
					<h4> Price &#8377; {productData.price}</h4>
					{addProductBtn ? (
						<button className="button pagebtn" onClick={handleAddToCart}>
							Add to Cart
						</button>
					) : (
						<button
							className="button pagebtn"
							style={{ cursor: "not-allowed" }}
						>
							{" "}
							Added
						</button>
					)}
				</div>
			</div>
		);
	else return <></>;
};

export default ProductPage;
