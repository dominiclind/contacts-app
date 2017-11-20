import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
} from '../actions/contacts';

export const initialState = {
  loading: false,
  error: false,
  contacts: [],
  favorites: [] 
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        error: false,
        loading: true
      }
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.contacts,
        loading:false,
      }
    case GET_CONTACTS_FAIL:
      return {
        ...state,
        error:true,
        loading:false,
      }           
    default:
      return state;
  }
}
