import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/RootReducer";
import thunkMiddleWare from "redux-thunk";

const createStoreWithMiddleWares = applyMiddleware(thunkMiddleWare)(
  createStore
);

export default function configureStore(initialState) {
  return createStoreWithMiddleWares(rootReducer, initialState);
}
