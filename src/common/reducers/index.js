import book from "./bookReducer";
import author from "./authorReducer";
import publisher from "./publisherReducer";
import { combineReducers } from "redux";

export default combineReducers({ book, author, publisher });
