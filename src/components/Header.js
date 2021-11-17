import { Link } from 'react-router-dom'

function Header() {
	return (
		<header>
			<p className="text-center text-2xl font-black my-5">Mecinkari</p>
			<div className="flex w-full justify-center items-center bg-white mb-5">
				<div className="flex divide-x items-center">
					<Link className="py-3 px-4 text-gray-500 hover:text-gray-800 transition-colors duration-250 ease-in-out font-bold" to="/">Home</Link>
					<Link className="py-3 px-4 text-gray-500 hover:text-gray-800 transition-colors duration-250 ease-in-out font-bold" to="/gallery">Gallery</Link>
					<Link className="py-3 px-4 text-gray-500 hover:text-gray-800 transition-colors duration-250 ease-in-out font-bold" to="/about">About</Link>
				</div>
			</div>
		</header>

	);
}

export default Header;