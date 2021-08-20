// import { combineReducers } from "redux";
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from "./reducer";

const middleware = [...getDefaultMiddleware(), logger]

// const rootReducer = combineReducers({
//     contacts: contactsReducer, 
// })

    //  contacts  {
    //   items: [],
    //   filter: '',
    // }
  
const store = configureStore({
    reducer: {
      contacts: contactsReducer, 
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

// const store = createStore(rootReducer, composeWithDevTools());

export default store;