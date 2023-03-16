import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				padding: "10px 100px",
			}}>
			<Link to="/geekster">Geekster</Link>
			<Link to="/">Home</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/about">About</Link>
		</div>
	);
};

export default Nav;
