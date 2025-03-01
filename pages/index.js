import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => (
	<div>
		<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
		<div>
			<div className="products-heading">
				<h2>OUR PRODUCTS</h2>
				<p>Take a look at our classic collection of abayas...</p>
			</div>

			<div className="products space-y-10">
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
		</div>
		<div>
			<div className="products-heading">
				<h2>MEN</h2>
				<p>Take a look at our classic collection of abayas...</p>
			</div>

			<div className="products mb-[200px]">
				{products?.map((product) => {
					if (product.tag === 'Male') {
                        return <Product key={product._id} product={product} />
                    }
				})}
			</div>
		</div>
		<div>
			<div className="products-heading">
				<h2>WOMEN</h2>
				<p>Take a look at our classic collection of abayas...</p>
			</div>

			<div className="products-container products">
				{products?.map((product) => {
                    if (product.tag === "Female") {
					return <Product key={product._id} product={product} />;
				}
                })}
			</div>
		</div>
		<div>
			<FooterBanner footerBanner={bannerData && bannerData[0]} />
			<div className="products-heading">
				<h2>KIDS</h2>
				<p>Take a look at our classic collection of abayas...</p>
			</div>

			<div className="mx-20 w-96 products">
				{products?.map((product) => {
                    if (product.tag === "Kids") {
						return <Product key={product._id} product={product} />;
					}
                })}
			</div>
		</div>
	</div>
);

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, bannerData },
	};
};

export default Home;
