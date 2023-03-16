import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
	const darkThemeStatus = useSelector(
		(state) => state.preference.darkThemeEnabled
	);
	const dispatch = useDispatch();
	return (
		<>
			<h1>Never try to Contact me</h1>
			<button onClick={() => dispatch({ type: "toggle" })}>
				toggle to {darkThemeStatus ? "light" : "dark"} mode
			</button>
		</>
	);
};

export default Contact;
