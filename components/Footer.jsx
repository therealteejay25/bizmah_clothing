import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
		<div className="footer-container">
			<p>2025 Bizmah All rights reserverd</p>
			<p className="icons">
				<a href="https//instagram.com/bizmah2023">
					<AiFillInstagram />
				</a>
                <p className='text-sm'>bizmahclothing@gmail.com</p>
			</p>
            <div>
                <p>+1 (780) 690 8497</p>
            </div>
		</div>
  );
}

export default Footer