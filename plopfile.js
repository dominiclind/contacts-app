const ROOT = 'src';

module.exports = function(plop) {

  // create util function
  plop.setGenerator('util', {
    description : 'create a utility function',
    prompts : [
      {
        type : 'input',
        name : 'name',
        message : 'name: ',
        validate : function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
        }
      }
    ],
    actions : [
      {
        type: 'add',
        path : ROOT + '/utils/{{ properCase name }}.js',
        templateFile : './plop-templates/util.txt'
      }
    ]
  });

  // create component js function
  plop.setGenerator('component', {
    description : 'create a react (dumb) component',
    prompts : [
      {
        type : 'input',
        name : 'name',
        message : 'name: ',
        validate : function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
        }
      }
    ],
    actions : [
      {
        type: 'add',
        path : ROOT + '/components/{{ properCase name }}/index.js',
        templateFile : './plop-templates/component.txt'
      },
      {
        type: 'add',
        path : ROOT + '/components/{{ properCase name }}/_{{dashCase name}}.scss',
        templateFile : './plop-templates/scss.txt'
      }
    ]
  });
	// -- end component

  // create component js function
  plop.setGenerator('container', {
    description : 'create a react reduxified container',
    prompts : [
      {
        type : 'input',
        name : 'name',
        message : 'name: ',
        validate : function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
        }
      }
    ],
    actions : [
      {
        type: 'add',
        path : ROOT + '/containers/{{ properCase name }}.js',
        templateFile : './plop-templates/container.txt'
      }
    ]
  });
  // -- end component


}
