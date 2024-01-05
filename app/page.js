import Image from "next/image";
import Link from "next/link";
import Users from "@/components/Users";
import styles from "./page.module.css";

const API_URL = "https://reqres.in/api/users";

async function _fetch() {
	const res = await fetch(API_URL);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
async function Home() {
	const { data } = await _fetch();
	return (
		<main className="container mx-auto h-screen flex justify-center align-center">
			<Users users={data} />
		</main>
	);
}
export default Home;
