import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price, description } }) => {
  return (
		<div className='pro'>
			<Link href={`/product/${slug.current}`}>
				<div className="product-card">
					<img
						src={urlFor(image && image[0])}
						className="object-cover h-60 w-60 product-image"
					/>
					<div className="flex">
						<p className="text-[#ea0c7b]">{name}</p>
						<p className="product-price">${price}</p>
					</div>
					{/* <p className="product-price">{description}</p> */}
				</div>
			</Link>
		</div>
  );
}

export default Product