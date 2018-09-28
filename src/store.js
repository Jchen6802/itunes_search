import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';

export default function configureStore(initialState={}) {
    return createStore(
        rootReducer,
        applyMiddleware(ReduxThunk)
    );
}
