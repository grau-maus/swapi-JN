import { createStore, combineReducers, applyMiddleware } from "redux";
import peopleReducer from "./people";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  people: peopleReducer,
});

const enhancer = applyMiddleware(thunk);

const configureStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, enhancer);

export default configureStore;
