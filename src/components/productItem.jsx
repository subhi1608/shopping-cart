import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleProduct } from "../redux/shoppingReducer";
import "../styles/style.css";
const ProductItem = ({ productdata, isCartPage = false }) => {
	const {
		id,
		title,
		price,
		category,
		description,
		image,
		rating,
		qty = null,
	} = productdata;

	const productPath = "product/" + id;
	const dispatch = useDispatch();
	const handleProductCount = (type) => {
		dispatch(handleProduct({ type, id }));
	};

	return (
		<div className="products__single">
			<div className="product__image">
				<img src={image} alt={title} />
			</div>
			<div className="product_detail">
				<span>
					{title.substr(0, 30)} {"...."}
				</span>
				<Link to={productPath} property={productdata}>
					{!isCartPage && <button className="button">View More</button>}
				</Link>
				<h4>Price &#8377; {qty ? qty * price : price}</h4>

				{isCartPage && (
					<div>
						<span>
							<button
								className="button"
								style={{ display: "inline", margin: "5px" }}
								onClick={() => {
									handleProductCount("DECREMENT");
								}}
							>
								-
							</button>
							Quantity: {qty}
						</span>

						<span>
							<button
								className="button"
								style={{ display: "inline", margin: "5px" }}
								onClick={() => {
									handleProductCount("INCREMENT");
								}}
							>
								+
							</button>
						</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductItem;
