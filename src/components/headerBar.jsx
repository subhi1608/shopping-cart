import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderBar = ({ setSearchValue }) => {
	const location = useLocation();
	return (
		<div className="header">
			<Link to="/">
				<span>Home</span>
			</Link>
			{location.pathname === "/" && (
				<input
					className="searchBar"
					type="text"
					placeholder="search"
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			)}

			<Link to="/cart">
				<button className="button">Cart</button>
			</Link>
		</div>
	);
};

export default HeaderBar;
