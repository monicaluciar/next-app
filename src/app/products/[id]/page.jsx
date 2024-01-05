import _fetch from "@/app/utils";
import Card from "@/components/Card";

async function ProductPage({ params }) {
	const product = await _fetch(`products/${params.id}`);
	return (
		<section className='container  mx-auto'>
			<Card>
				<img src={product.image} className='h-44 w-40' />
				<div>
					<h2 className='font-bold'>{product.title}</h2>
					<p className='p-1'>{product.description}</p>
					<p className='font-bold text-lg '>{product.price} $</p>
				</div>
			</Card>
		</section>
	);
}

export default ProductPage;
