import { combineReducers, createStore } from "redux";
import todoList from "../modules/addTodo";
import counter from "../modules/counter";
import Todo from "../modules/Todo";

const rootReducer = combineReducers({
  counter,
  todoList,
  Todo,
});
const store = createStore(rootReducer);

export default store;
