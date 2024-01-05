async function _fetch(url) {
	const res = await fetch(`https://fakestoreapi.com/${url}`);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
export default _fetch;
