import { Children } from "react";

function Card({ children }) {
	return (
		<div className='bg-slate-50 text-sky-900 rounded-lg p-3 flex flex-col gap-4'>
			{children}
		</div>
	);
}

export default Card;
