import { createLogger } from 'redux-logger'
import { Iterable } from "immutable";

const middlewares = [];

if (process.env.NODE_ENV !== "production") {
    const logger = createLogger({
        stateTransformer: state => {
            const printableState = {};
            Object.keys(state).forEach(key => {
                printableState[key] = Iterable.isIterable(state[key]) ? state[key].toJS() : state[key];
            });
            return printableState;
        },
    });

    middlewares.push(logger);
}

export default middlewares;