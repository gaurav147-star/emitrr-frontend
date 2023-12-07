import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import  {authReducer, authUserByIdReducer } from "./reducers/authReducer";
import exerciseReducer from "./reducers/exerciseReducer";
import { progressAllReducer, progressFetchReducer } from "./reducers/progressReducer";

const reducer = combineReducers({
  auth: authReducer,
  authByid: authUserByIdReducer,
  exercise: exerciseReducer,
  progress: progressFetchReducer,
  progressAll: progressAllReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
