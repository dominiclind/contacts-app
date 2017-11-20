import {
  LOGIN,
  LOGOUT
} from '../actions/auth';

export const initialState = {
  loading: false,
  user: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
      }  
    case LOGOUT:
      return {
        ...state,
        user: false,
        loading:false,
      }            
    default:
      return state;
  }
}
