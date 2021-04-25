import { combineReducers } from 'redux';
import tools from "./tools";
import filters from "./filters";

const rootReducer = combineReducers({
    tools,
    filters,
});

export default rootReducer;