export const LOGIN = 'AUTH/LOGIN';
export const LOGOUT = 'AUTH/LOGOUT';

export const LOGIN_ERROR = 'AUTH/LOGIN_ERROR';


export function login(user) {
  return (dispatch) => {
  	// return fake user for fake login.
    dispatch({ type: LOGIN, user});
  }
}

export function logout() {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  }
}
