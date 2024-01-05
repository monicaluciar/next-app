import Products from "@/components/Products";
import _fetch from "@/app/utils";

async function Home() {
	const data = await _fetch("products");
	return <Products products={data} />;
}
export default Home;
