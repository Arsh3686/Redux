import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Routers from "./Router";
import store from "./store/Store";

const App = () => {
	return (
		<Provider store={store}>
			<Routers />
		</Provider>
	);
};

export default App;
