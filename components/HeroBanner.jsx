import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = () => {
	return (
		<div className="hero-banner-container">
			<div className="col">
				<p className="beats-solo">HOT DEALS...</p>
				<h3>CLASSIC ABAYAS</h3>
				<p>
					Explore our wide range of deluxe and quality abayas... dive into the world of fashion with us.{" "}
				</p>
				<Link href={`/product`}>
					<button type="button">Shop Now</button>
				</Link>
			</div>
			<img
				src={'/abaya.png'}
				alt="headphones"
				className="hero-banner-image"
			/>
		</div>
	);
};

export default HeroBanner;
