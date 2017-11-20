import configureStore from 'redux-mock-store';
import { cleanContacts, getInitials, toggleFavoriteInArray} from './contacts';
describe('cleanContacts', () => {

  it('should remove contacts without firstname, and sort based on firstname', () => {
	  const unsorted = [
		  {
		  	first_name : 'dominic',
		  },
		  {
		  	first_name : 'bertil'
		  },
		  {
		  	first_name : 'anton'
		  },
		  {
		  	first_name: ''
		  }
	  ];
	
	  const cleaned = cleanContacts(unsorted);

	  expect(cleaned[0].first_name).toEqual('anton')
	  expect(cleaned[1].first_name).toEqual('bertil')
	  expect(cleaned[2].first_name).toEqual('dominic')
	  expect(cleaned.length).toEqual(3)
  });
})

describe('getInitials', () => {

  it('should make initials out of first & lastname', () => {
  	const firstname = 'Dominic';
  	const lastname = 'Lind';

  	expect(getInitials(firstname,lastname)).toEqual('DL');
  })

})

describe('toggleFavoriteInArray', () => {

  it('toggleFavoriteInArray should remove when in array', () => {
  	const array = [1,2,3];
  	const value = 2;

  	expect(toggleFavoriteInArray(array,value)).toEqual([1,3]);
  })

  it('toggleFavoriteInArray should add when not in array', () => {
  	const array = [1,2,3];
  	const value = 5;
  	expect(toggleFavoriteInArray(array,value)).toEqual([1,2,3,5]);
  })

});