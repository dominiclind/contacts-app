export const MESSAGE = 'UI/MESSAGE';
export const HIDE_MESSAGE = 'UI/HIDE_MESSAGE';

export function showMessage(message) {
  return (dispatch) => {
  	setTimeout(() => {
    	dispatch({ type: MESSAGE, message});
  	},100)
  }
}

export function hideMessage() {
  return (dispatch) => {
    dispatch({ type: HIDE_MESSAGE});
  }
}
