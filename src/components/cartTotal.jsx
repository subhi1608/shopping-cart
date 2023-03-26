import React, { useEffect, useState } from "react";

const CartTotal = ({ cartData }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		if (cartData && cartData.length) {
			let finalPrice = 0;
			cartData.map((item) => {
				const { productData, qty } = item;
				let itemTotal = productData.price * qty;
				finalPrice += itemTotal;
			});
			setTotalPrice(parseInt(finalPrice));
		}
	}, [cartData]);
	return (
		<div>
			<h2>Total {totalPrice}</h2>
		</div>
	);
};

export default CartTotal;
