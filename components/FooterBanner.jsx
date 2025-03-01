import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        {/* <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div> */}
        <div className="right">
          <p>HOLIDAY SALES</p>
          <h3>10% Off on all Abayas above $200</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe, necessitatibus in veniam error temporibus pariatur ratione accusamus quas expedita ducimus fugit ad iusto mollitia eum voluptatibus perspiciatis minima eaque!</p>
          <Link href={`/product`}>
            <button className='w-60' type="button">{buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner