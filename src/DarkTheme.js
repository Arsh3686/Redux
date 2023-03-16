import React from "react";
import { useSelector } from "react-redux";
const DarkTheme = ({ children }) => {
	const darkTheme = useSelector((state) => state.preference.darkThemeEnabled);
	console.log(darkTheme);
	return <div>{children}</div>;
};

export default DarkTheme;
