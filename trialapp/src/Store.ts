import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Reducer, State } from './Reducer'
import thunk from "redux-thunk"

export type AppState = {
    state: State
}

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
    combineReducers<AppState>({
        state: Reducer
    }),
    storeEnhancers(applyMiddleware(thunk))
)

export default Store