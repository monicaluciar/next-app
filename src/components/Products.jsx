import Link from "next/link";
import Card from "./Card";

function Products({ products }) {
	return (
		<section className='flex font-sans flex-col'>
			<h1 className='font-bold'>Explore our Products</h1>
			<div className='grid grid-cols-4 gap-4'>
				{products.map((product) => (
					<Link
						className='flex flex-col justify-around'
						href={`/products/${product.id}`}
						key={product.id}
					>
						<Card>
							<img src={product.image} className='rounded-lg w-20 h-20' />

							<div>
								<h2 className='text-bold'>{product.title}</h2>
								<p className='text-slate-500'> {product.price} $</p>
							</div>
						</Card>
					</Link>
				))}
			</div>
		</section>
	);
}

export default Products;
