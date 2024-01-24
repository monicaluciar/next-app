import Link from "next/link";

function Navbar() {
	return (
		<nav className='bg-violet   -50 mx-20 rounded-lg my-6 flex py-6 px-3'>
			<ul className='flex w-full font-bold justify-around    '>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/categories'>Categories</Link>
				</li>
				<li>
					<Link href='/new'>Add new product</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
