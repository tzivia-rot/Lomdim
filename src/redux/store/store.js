import { createStore, combineReducers } from "redux";
import user from "./user";
import teacher from "./teacher";
import lesson from "./lesson";
import category from "./category";

const reducer = combineReducers({ user, teacher, lesson, category });

const store = createStore(reducer);
window.store = store;
export default store;
