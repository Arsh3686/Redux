import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Geekster from "./Geekster";
import Home from "./Home";
import Nav from "./Nav";

const Routers = () => {
	const darkThemeStatus = useSelector(
		(state) => state.preference.darkThemeEnabled
	);

	return (
		<Router>
			<div
				style={{
					backgroundColor: `${darkThemeStatus ? "black" : "white"}`,
					color: `${darkThemeStatus ? "white" : "black"}`,
				}}>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/geekster" element={<Geekster />} />
				</Routes>
			</div>
		</Router>
	);
};

export default Routers;
