import reducer, {initialState} from './contacts'
import {
	GET_CONTACTS,
	GET_CONTACTS_FAIL,
	GET_CONTACTS_SUCCESS,
	GET_CONTACT,
	GET_CONTACT_FAIL,
	GET_CONTACT_SUCCESS,
} from '../actions/contacts'

describe('contact reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('GET_CONTACTS should set loading', () => {
    expect(
      reducer(undefined, {
        type: GET_CONTACTS
      })
    ).toEqual({
      ...initialState,
      error:false,
      loading: true
    })
  })

  it('GET_CONTACTS_SUCCESS should set contacts', () => {
    const contacts = [
      {first_name : 'dominic'},
      {first_name: 'anton'}
    ];
    expect(
      reducer(undefined, {
        type: GET_CONTACTS_SUCCESS,
        contacts
      })
    ).toEqual({
      ...initialState,
      loading: false,
      contacts
    })
  })

  it('GET_CONTACTS_FAIL should return loading false and no contacts and set error', () => {
    expect(
      reducer(undefined, {
        type: GET_CONTACTS_FAIL
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: true
    })
  })


})