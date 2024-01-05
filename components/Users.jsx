import Link from "next/link";

function Users({ users }) {
	return (
		<section className='flex font-sans flex-col'>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
						<Link href={`/users/${user.id}`} key={user.id} >
					<li className="bg-slate-900 mb-2 p-2 flex justify-between rounded-md " >
							<div>
								<h2 className="text-bold">{ user.first_name } {user.last_name} </h2>
								<p className="text-slate-500" > {user.email}</p>
							</div>
							<img src={user.avatar} className="rounded-full w-30" />
					</li>
						</Link>
				))}
			</ul>
		</section>
	);
}

export default Users;
