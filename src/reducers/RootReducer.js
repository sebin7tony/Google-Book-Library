import { combineReducers } from "redux";
import BookReducer from "./BookReducer";

const RootReducer = combineReducers({ books: BookReducer });

export default RootReducer;
