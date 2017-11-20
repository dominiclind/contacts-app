import reducer, {initialState} from './auth'
import {
	LOGIN,
	LOGOUT,
} from '../actions/auth'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('login should set user', () => {
  	const user = {firstname: 'Dominic Lind'};
    expect(
      reducer(undefined, {
        type: LOGIN,
        user
      })
    ).toEqual({
    	loading: false,
    	user
    })
  })

  it('logout should remove user', () => {
    expect(
      reducer(undefined, {
        type: LOGOUT
      })
    ).toEqual({
    	loading: false,
    	user: false
    })
  })
})