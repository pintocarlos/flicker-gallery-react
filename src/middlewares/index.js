import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);
const middlewares = [epicMiddleware];

if (process.env.NODE_ENV !== 'production') {
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
