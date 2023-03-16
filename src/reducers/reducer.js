import { combineReducers } from "redux";

const preference = (state = { darkThemeEnabled: false }, action) => {
	switch (action.type) {
		case "toggle":
			console.log(action);
			return { darkThemeEnabled: !state.darkThemeEnabled };
		default:
			return state;
	}
};
export default combineReducers({ preference });
