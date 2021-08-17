import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from "./reducer";

const rootReducer = combineReducers({
    contacts: contactsReducer, 
})

const initialState = {
    name: '',
    number: '',
}

// const initialState = {
//     contacts: {
//       items: [],
//       filter: '',
//     }
//   }

// const reducer = (state = initialState, { type, payload }) => state;

const store = createStore(rootReducer, composeWithDevTools());

// const store = createStore(reducer);

// const store = createStore(reducer, composeWithDevTools(
//     applyMiddleware(...middleware),
//     // other store enhancers if any
//   ));

export default store;