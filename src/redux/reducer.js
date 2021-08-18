import { combineReducers } from 'redux';
import types from './types';

  const items = (state = [], { type, payload }) => {
      switch (type) {
          case types.ADD_CONTACT:
              return [...state, payload];

              case types.DELETE_ITEM:
                  return state.filter(contact => contact.id !== payload);

              default:
                  return state;
      }
  }

  const filter = (state = '', action) => {
    return state;
}

export default combineReducers({
    items,
    filter
})