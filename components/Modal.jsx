import React from "react";
import { useState } from "react";

export default function Modal({ isActive, setIsActive }) {
	return (
		<div
			className={isActive ? "modal-container active" : "modal-container"}
		>
			<div className="modal">
				<p>
					No Payment gateway availaible right now... please try again
					later
				</p>
				<button
					className="modal-btn"
					onClick={() => setIsActive(false)}
				>
					Okay
				</button>
			</div>
		</div>
	);
}
