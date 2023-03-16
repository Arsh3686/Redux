import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DarkTheme from "./DarkTheme";

const Home = () => {
	const darkThemeStatus = useSelector(
		(state) => state.preference.darkThemeEnabled
	);
	const dispatch = useDispatch();
	return (
		<DarkTheme>
			<h1>hey i am from home</h1>
			<h3>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
				a, error perferendis nesciunt quisquam illo. Tenetur eum
				debitis, sed laudantium temporibus, distinctio aperiam
				perferendis eos ipsa veritatis eius, similique quas?
			</h3>
			<button onClick={() => dispatch({ type: "toggle" })}>
				toggle to {darkThemeStatus ? "light" : "dark"} mode
			</button>
		</DarkTheme>
	);
};

export default Home;
