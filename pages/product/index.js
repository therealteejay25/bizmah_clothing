import React from "react";

import { client } from "../../lib/client";
import { Product, FooterBanner, HeroBanner } from "../../components";

const Home = ({ products, bannerData }) => (
	<div>
		{/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
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
