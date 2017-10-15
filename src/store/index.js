import { createStore, applyMiddleware, compose } from "redux";
import middlewares from "middlewares";
import rootReducer from "reducers";

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
