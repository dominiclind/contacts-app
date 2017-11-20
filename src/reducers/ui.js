import {
	MESSAGE,
  HIDE_MESSAGE
} from '../actions/ui';

export const initialState = {
  loading: false,
  message: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MESSAGE:
      return {
        ...state,
        message: action.message
      }
    case HIDE_MESSAGE:
      return {
        ...state,
        message: false
      }
    default:
      return state;
  }
}
