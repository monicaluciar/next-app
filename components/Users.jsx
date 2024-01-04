function Users({ users }) {
	console.log(users);
	return (
		<section className='flex font-sans'>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>name: {user.first_name} </li>
				))}
			</ul>
		</section>
	);
}

export default Users;
