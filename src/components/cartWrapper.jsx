import React from "react";
import CartTotal from "./cartTotal";
import ProductItem from "./productItem";

const CartWrapper = ({ cartData }) => {
	return (
		<div className="cartWrapper">
			{cartData && cartData.length ? (
				<>
					<div className="cartList">
						{cartData?.map((item) => {
							const updatedProps = { ...item.productData, qty: item.qty };
							return (
								<div style={{ margin: "5px" }} key={item.productData.id}>
									<ProductItem productdata={updatedProps} isCartPage={true} />
								</div>
							);
						})}
					</div>
					<CartTotal cartData={cartData} />{" "}
				</>
			) : (
				<h2 style={{ margin: "0 auto" }}>!Oops Empty Cart</h2>
			)}
		</div>
	);
};

export default CartWrapper;
