import search from './search';

describe('search', () => {
  const all = [
	  {
	  	first_name : 'dominic',
	  	last_name: 'lind',
	  	title: 'frontend',
	  	team: 'tech'
	  },
	  {
	  	first_name : 'bertil',
	  	last_name : 'andersson',
	  	title: 'backend',
	  	team: 'tech'
	  },
	  {
	  	first_name : 'test',
	  	last_name: 'testsson',
	  	title: 'manager',
	  	team: 'managers'
	  }
  ];

  it('should return all if no search value', () => {
  	const value = '';
		expect(search(value, all)).toEqual(all);
  })

   it('[dominic] should return dominic', () => {
  	const value = 'dominic';
		expect(search(value, all).length).toEqual(1);
		expect(search(value, all)[0].first_name).toEqual('dominic');
  })

   it('[tech] should return two hits', () => {
  	const value = 'tech';
		expect(search(value, all).length).toEqual(2);
		expect(search(value, all).map(u => u.first_name)).toEqual(['dominic', 'bertil']);
  })

  it('[backend] should return one', () => {
  	const value = 'backend';
		expect(search(value, all).length).toEqual(1);
		expect(search(value, all)[0].first_name).toEqual('bertil');
  })

  it('[sson] should return two', () => {
  	const value = 'sson';
		expect(search(value, all).length).toEqual(2);
		expect(search(value, all).map(u => u.first_name)).toEqual(['test', 'bertil']);
  })
})