import { combineReducers } from 'redux';
import tools from "./tools";
import filters from "./filters";
import cart from "./cart"

const rootReducer = combineReducers({
    tools,
    filters,
    cart
});

export default rootReducer;