import thunk from "redux-thunk";
import { RootReducer } from "../reducer/rootReducer";
import { applyMiddleware, createStore, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
