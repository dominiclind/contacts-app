import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  LOGIN,
  LOGOUT,
  login,
  logout
} from './auth';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('auth actions', () => {

  it('login ', () => {

    const user = {firstname: 'dominic lind'};
    const expectedActions = [
      { type: LOGIN , user},
    ]

    const store = mockStore()
    store.dispatch(login(user))

    expect(store.getActions()).toEqual(expectedActions)
    
  })

  it('logout ', () => {

    const expectedActions = [
      { type: LOGOUT },
    ]

    const store = mockStore()
    store.dispatch(logout())

    expect(store.getActions()).toEqual(expectedActions)
    
  })
})