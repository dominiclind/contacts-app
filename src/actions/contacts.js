import {
  getContacts as apiGetContacts,
  getSingleContact as apiGetSingleContact,
  saveContact as apiSaveContact,
  deleteContact as apiDeleteContact
} from '../utils/api';

import { showMessage } from './ui';
import { cleanContacts } from '../utils/contacts';

export const GET_CONTACTS = 'CONTACTS/GET_CONTACTS';
export const GET_CONTACTS_FAIL = 'CONTACTS/GET_CONTACTS_FAIL';
export const GET_CONTACTS_SUCCESS = 'CONTACTS/GET_CONTACTS_SUCCESS';

export const GET_CONTACT = 'CONTACTS/GET_CONTACT';
export const GET_CONTACT_FAIL = 'CONTACTS/GET_CONTACT_FAIL';
export const GET_CONTACT_SUCCESS = 'CONTACTS/GET_CONTACT_SUCCESS';

export const SAVE_CONTACT = 'CONTACTS/SAVE_CONTACT';
export const SAVE_CONTACT_FAIL = 'CONTACTS/SAVE_CONTACT_FAIL';
export const SAVE_CONTACT_SUCCESS = 'CONTACTS/SAVE_CONTACT_SUCCESS';

export const DELETE_CONTACT = 'CONTACTS/DELETE_CONTACT';
export const DELETE_CONTACT_FAIL = 'CONTACTS/DELETE_CONTACT_FAIL';
export const DELETE_CONTACT_SUCCESS = 'CONTACTS/DELETE_CONTACT_SUCCESS';

export const TOGGLE_FAVORITE = 'CONTACTS/TOGGLE_FAVORITE';


export function getContacts() {
  return (dispatch, getState) => {
    dispatch({ type: GET_CONTACTS });
    return apiGetContacts()
    .then(res => {
      const contacts = res.data;

      dispatch({
        type: GET_CONTACTS_SUCCESS,
        contacts: cleanContacts(contacts)
      })
    })
    .catch(error =>{
      dispatch({type: GET_CONTACTS_FAIL})
    })
  }
}



export function getSingleContact(id) {
  return (dispatch, getState) => {
    dispatch({ type: GET_CONTACT });

    return new Promise((resolve, reject) => { 
      apiGetSingleContact(id).then(res => {
        const contact = res.data;

        dispatch({
          type: GET_CONTACT_SUCCESS,
          // single: contact
        })
        resolve(contact)
      })
      .catch(error =>{
        dispatch({type: GET_CONTACT_FAIL})
        resolve();
      })
    })
  
  }
}

export function saveContact(id, contact) {
  return (dispatch, getState) => {
    dispatch({ type: SAVE_CONTACT });

    return new Promise((resolve, reject) => { 
      apiSaveContact(id, contact).then(res => {

        dispatch({
          type: SAVE_CONTACT_SUCCESS,
          user: res.data
        })
        if(id){
          dispatch(showMessage(`Updated ${contact.first_name}`))
        }else{
          dispatch(showMessage(`Added ${contact.first_name}!`))
        }
        resolve(res.data)
      })
      .catch(error =>{
        dispatch({type: SAVE_CONTACT_FAIL})
        resolve()
      })
    })
  
  }
}

export function deleteContact(id) {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_CONTACT });

    return new Promise((resolve, reject) => { 
      apiDeleteContact(id).then(res => {
        dispatch({
          type: DELETE_CONTACT_SUCCESS,
        })
        dispatch(showMessage('Deleted contact!'))
        resolve()
      })
      .catch(error =>{
        dispatch({type: DELETE_CONTACT_FAIL})
        resolve()
      })
    })
  
  }
}
