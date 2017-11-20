import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';

import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  SAVE_CONTACT,
  SAVE_CONTACT_SUCCESS,
  SAVE_CONTACT_FAIL,
  DELETE_CONTACT,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  getContacts,
  getSingleContact,
  saveContact,
  deleteContact
} from './contacts';
import {cleanContacts} from '../utils/contacts';
import {api} from '../utils/api';

const MOCKTACTS = [
  {
      "color": "902d59",
      "first_name": "Katie",
      "id": "U02J9BG9J",
      "image": null,
      "last_name": "Donley",
      "location": "America/New_York",
      "team": "Teamless",
      "title": ""
  },
  {
      "color": "a2a5dc",
      "first_name": "Donna",
      "id": "U0F3VMMT4",
      "image": "https://avatars.slack-edge.com/2015-11-24/15226553217_5bd510cc83602969e105_192.jpg",
      "last_name": "Hanafi",
      "location": "Europe/Amsterdam",
      "team": "Customer Relations",
      "title": "Head of CSI & PM Marketplace"
  }
];

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('contacts', () => {

  it('/GET - 200 - should return correct actions', () => {
    const mock = new MockAdapter(api);

    mock.onGet('/contacts').reply(200, MOCKTACTS);

    const expectedActions = [
      { type: GET_CONTACTS },
      { type: GET_CONTACTS_SUCCESS, contacts: cleanContacts(MOCKTACTS)}
    ]
    const store = mockStore({})

    return store.dispatch(getContacts())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('/GET - 500 - should return fail', () => {
    const mock = new MockAdapter(api);

    mock.onGet('/contacts').reply(500);

    const expectedActions = [
      { type: GET_CONTACTS },
      { type: GET_CONTACTS_FAIL}
    ]
    const store = mockStore({})

    return store.dispatch(getContacts())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('/GET - timeout - should return fail', () => {
    const mock = new MockAdapter(api);

    mock.onGet('/contacts').timeout();

    const expectedActions = [
      { type: GET_CONTACTS },
      { type: GET_CONTACTS_FAIL}
    ]
    const store = mockStore({})

    return store.dispatch(getContacts())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

})


describe('single contact', () => {

  it('/GET - 200 - should return correct actions', () => {
    const mock = new MockAdapter(api);

    mock.onGet('/contacts/U02J9BG9J').reply(200, MOCKTACTS[0]);

    const expectedActions = [
      { type: GET_CONTACT },
      { type: GET_CONTACT_SUCCESS}
    ]
    const store = mockStore({})

    return store.dispatch(getSingleContact('U02J9BG9J'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('/GET - 500 - should return fail', () => {
    const mock = new MockAdapter(api);

    mock.onGet('/contacts/U02J9BG9J').reply(500);

    const expectedActions = [
      { type: GET_CONTACT },
      { type: GET_CONTACT_FAIL}
    ]
    const store = mockStore({})

    return store.dispatch(getSingleContact('U02J9BG9J'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('/GET - timeout - should return fail', () => {
    const mock = new MockAdapter(api);

    mock.onGet('/contacts/U02J9BG9J').timeout();

    const expectedActions = [
      { type: GET_CONTACT },
      { type: GET_CONTACT_FAIL}
    ]
    const store = mockStore({})

    return store.dispatch(getSingleContact('U02J9BG9J'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

})

describe('save contact', () => {
  const updatedUser = {
    "color": "902d59",
    "first_name": "Dominic",
    "id": "U02J9BG9J",
    "image": null,
    "last_name": "Lind",
    "location": "America/New_York",
    "team": "Teamless",
    "title": ""
  };

  it('200 update user should return updated', () => {
    const mock = new MockAdapter(api);
    mock.onPut('/contacts/U02J9BG9J').reply(200, updatedUser);

    const expectedActions = [
      { type: SAVE_CONTACT },
      { type: SAVE_CONTACT_SUCCESS, user: updatedUser}
    ]
    const store = mockStore({})

    return store.dispatch(saveContact('U02J9BG9J', updatedUser))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('500 update user should fail', () => {
    const mock = new MockAdapter(api);
    mock.onPut('/contacts/U02J9BG9J').reply(500);

    const expectedActions = [
      { type: SAVE_CONTACT },
      { type: SAVE_CONTACT_FAIL}
    ]
    const store = mockStore({})

    return store.dispatch(saveContact('U02J9BG9J', updatedUser))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('200 save new user', () => {
    const mock = new MockAdapter(api);
    mock.onPost('/contacts').reply(200, updatedUser);

    const expectedActions = [
      { type: SAVE_CONTACT },
      { type: SAVE_CONTACT_SUCCESS, user: updatedUser}
    ]
    const store = mockStore({})

    return store.dispatch(saveContact(false, updatedUser))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
  
  it('500 save new should fail', () => {
    const mock = new MockAdapter(api);
    mock.onPost('/contacts').reply(500);

    const expectedActions = [
      { type: SAVE_CONTACT },
      { type: SAVE_CONTACT_FAIL}
    ]
    const store = mockStore({})

    return store.dispatch(saveContact(false, updatedUser))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

})

describe('delete contact', () => {
  const id = 'U02J9BG9J';

  it('200 delete user should be deleted', () => {
    const mock = new MockAdapter(api);
    mock.onDelete('/contacts/'+ id).reply(200);

    const expectedActions = [
      { type: DELETE_CONTACT },
      { type: DELETE_CONTACT_SUCCESS}
    ]
    const store = mockStore({})

    return store.dispatch(deleteContact('U02J9BG9J'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
 
  it('500 delete user should fail', () => {
    const mock = new MockAdapter(api);
    mock.onDelete('/contacts/'+ id).reply(500);

    const expectedActions = [
      { type: DELETE_CONTACT },
      { type: DELETE_CONTACT_FAIL}
    ]
    const store = mockStore({})

    return store.dispatch(deleteContact('U02J9BG9J'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

   it('timeout delete user should fail', () => {
    const mock = new MockAdapter(api);
    mock.onDelete('/contacts/'+ id).timeout();

    const expectedActions = [
      { type: DELETE_CONTACT },
      { type: DELETE_CONTACT_FAIL}
    ]
    const store = mockStore({})

    return store.dispatch(deleteContact('U02J9BG9J'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

})