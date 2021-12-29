import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
const thunk = require('redux-thunk').default;

const store = createStore(rootReducer,  applyMiddleware(thunk));

export default store;