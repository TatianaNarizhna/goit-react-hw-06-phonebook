import { v4 as uuidv4 } from "uuid";
import types from './types';

const inputValue = (name, value) => {

}

const addContact = data => ({
        type: types.ADD_CONTACT,
        // payload: data,
        payload: {
          id: uuidv4(),
          name: data.name,
          number: data.number,
        }
    }
)

const deleteItem = listId => ({
    type: types.DELETE_ITEM,
    payload: listId,
})

const changeFilter = e => ({
    type: types.CHANGE_FILTER,
    payload: e,
})

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteItem, changeFilter };

// eslint-disable-next-line import/no-anonymous-default-export
// export default { addContact, deleteItem };