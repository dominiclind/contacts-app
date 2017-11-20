import Fuse from 'fuse.js';

const OPTIONS = {
	sortByScore: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  keys: [
    'first_name',
    'last_name',
    'title',
    'team'
	]
};

// fuse.js makes it easy to fuzzy-search
// a list based on multiple properites
export default (search, contacts) => {
	
	if(search) {
		const fuse = new Fuse(contacts, OPTIONS);
		
		const result = fuse.search(search);
		return result
	} else {
		return contacts
	}
}