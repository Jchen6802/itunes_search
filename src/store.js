import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';

export default function configureStore(initialState={}) {
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(ReduxThunk)
        )
    );
}
