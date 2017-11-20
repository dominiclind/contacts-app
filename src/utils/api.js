import axios from 'axios';

let baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:5000' : '';

export const api = axios.create({
  timeout: 5000,
  baseURL
});

export function getContacts () {
	return api.get('/contacts')
}

export function getSingleContact (id) {
	return api.get(`/contacts/${id}`)
}

export function saveContact (id, contact) {
	if(id){
		return api.put(`/contacts/${id}`, contact)
	}else{
		return api.post(`/contacts`, contact)
	}
}

export function deleteContact (id) {
	return api.delete(`/contacts/${id}`)
}