import { createStore } from 'redux';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const configureStore = () => {
  return createStore(
    reducers,
    {},
    composeWithDevTools(),
  );
};

export default configureStore;