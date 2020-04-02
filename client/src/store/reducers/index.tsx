import { combineReducers } from "redux";
import todoDataList from "./todo.red";

export default combineReducers({
  todoDataList: todoDataList,
});
