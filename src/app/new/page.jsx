"use client";
import { useRouter } from "next/navigation";
function NewProduct() {
	const router = useRouter();
	const handleSubmit = async (event) => {
		event.preventDefault();
		const name = event.target.name.value;
		const price = event.target.price.value;
		const description = event.target.description.value;

		const response = await fetch("/api/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, price, description }),
		});
		if (!response.ok) {
			console.log("algo ha fallado");
		}
		const data = await response.json();
		console.log(data);
		router.push("/");
	};
	return (
		<div>
			<h1 className='text-2xl font-bold mb-4'>Add new product</h1>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<label htmlFor='name'>Name:</label>
				<input
					id='name'
					className='border border-gray-300 rounded-md p-2 mb-4'
					placeholder='Enter product name'
				/>
				<label htmlFor='price'>Price:</label>
				<input
					id='price'
					className='border border-gray-300 rounded-md p-2 mb-4'
					placeholder='Enter product price'
				/>
				<label htmlFor='description'>Description:</label>
				<textarea
					id='description'
					className='border border-gray-300 rounded-md p-2 mb-4'
					placeholder='Enter product description'
				/>
				<button className='bg-blue-500 text-white p-2 rounded-md' type='submit'>
					Add Product
				</button>
			</form>
		</div>
	);
}

export default NewProduct;
