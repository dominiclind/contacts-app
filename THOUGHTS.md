# Thoughts


## Application
I went with a single view application. You do everything from the main starting screen.

Everything is handled from the searchbar. It is forgiving to a point, were you can kinda spell wrong (helpfull if you're new at work, and aren't sure of everyones correct spelling), and it then gives you suggestions.

This is also the admin view. When you're in an logged-in state, you get access to the edit view.

### Admin
Logging in (hardcoded state, which is reset when reloading page), will enable you to add/edit members. 

### Edit
Here you can edit your members. Certain things are left out of this version (Editing / uploading avatars, Better location selector).

Enhancements here would be picking and cropping user avatars, and having a human readable search for location that generates locationcode. For now these inputs are simple text-inputs.



## Stack

Started of with Facebooks's minimal boilerplate [Create React App](https://github.com/facebookincubator/create-react-app). Then ejected and added postcss for sass-goodness. This caused the extra amount of boilerplate-files generated in the project, like config and huge package.json list of deps. 


#### What is plop?
Plop is a microgenerator that generates files, and can help alot with keeping consistency throughout the project. Set the structure, and how various parts of your application should work, then generate files based on templates.

Check `plop-templates/` for templates, and `plopfile.js` for the generator!


#### Other dependencies

[react-router](https://github.com/ReactTraining/react-router) - react router of choice

[redux](https://github.com/reactjs/redux) - state management (with redux-thunk for async actions)

[fuse.js](https://github.com/krisk/Fuse) - fuzzy forgiving search 

[react-ionicons](https://github.com/zamarrowski/react-ionicons/) - simple icon component

[react-color](https://github.com/casesandberg/react-color) - a cross-browser color picker
