import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { authReducer } from "modules/Auth";
import { todosReducer } from "modules/Todos";

const reducer = history =>
  combineReducers({
    todos: todosReducer,
    auth: authReducer,
    router: connectRouter(history)
  });

export default reducer;
