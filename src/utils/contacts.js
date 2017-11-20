import _ from 'lodash';

export function cleanContacts(contacts){
  const filtered = contacts.filter(u => u.first_name); // remove user without name
  const sorted = _.orderBy(filtered, [u => u.first_name.toLowerCase()])

  return sorted
}

export function getInitials (firstname, lastname) {
	
	let first = firstname == null ? 'A' : firstname;
	let last = lastname == null ? 'L' : lastname;
	
	return `${first.charAt(0)}${last.charAt(0)}`
}

export function toggleFavoriteInArray(array, val) {
  if(!_.includes(array, val)){
    array.push(val);
  }else{
    _.remove(array, item => item === val);
  }
  return array;
}