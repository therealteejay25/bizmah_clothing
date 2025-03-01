import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();

	return (
		<div className="navbar-container">
			<p className="logo">
				<Link href="/" className="bg-red-500">
					<img src="/favicon.png" />
				</Link>
			</p>

			{/* <div className="nav-links">
        <a href="#"><Link href='/'>Home</Link></a>
        <a href="#"><Link href='/product'>Shop</Link></a>
        <a href="#"><Link href='/men'>Men</Link></a>
        <a href="#"><Link href='/women'>Women</Link></a>
        <a href="#"><Link href='/kids'>Kids</Link></a>
      </div> */}

			<button
				type="button"
				className="cart-icons"
				onClick={() => setShowCart(true)}
			>
				<AiOutlineShopping />
				<span className="cart-item-qty">{totalQuantities}</span>
			</button>

			{showCart && <Cart />}
		</div>
	);
};

export default Navbar;
