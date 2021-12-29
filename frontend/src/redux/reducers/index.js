import { combineReducers } from "redux";

import fetchReducer from './fetchReducer';

const rootReducer = combineReducers({
	fetch: fetchReducer,
});

export default rootReducer;