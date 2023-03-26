import React from "react";
import { useSelector } from "react-redux";
import CartWrapper from "../components/cartWrapper";

const UserCart = () => {
	const userCart = useSelector((state) => state.shopping.shoppingCart);

	return <div>{userCart ? <CartWrapper cartData={userCart} /> : null}</div>;
	// return <h1>UserCart</h1>;
};

export default UserCart;
