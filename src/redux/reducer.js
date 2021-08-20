import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './types';

const items = createReducer([], {
    'contact/addContact': (state, action) => [...state, action.payload],
    'contact/delete': (state, action) => 
    state.filter(contact => contact.id !== action.payload)
});

//   const items = (state = [], { type, payload }) => {
//       switch (type) {
//           case types.ADD_CONTACT:
//               return [...state, payload ];

//               case types.DELETE_ITEM:
//                   return state.filter(contact => contact.id !== payload);

//               default:
//                   return state;
//       }
//   }

  const filter = (state = '', { type, payload }) => {
    switch(type) {
        case types.CHANGE_FILTER:
            return payload;

            default:
                return state;
    }
}

// const addContactsReducer = (state = [], { type, payload }) => {
//     if(type === types.ADD_CONTACT) {
//         return [...state, payload];
// }

export default combineReducers({
    items,
    filter
})