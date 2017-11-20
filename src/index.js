import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();


if(module.hot) {
	module.hot.accept('./router', () => {
		const NextRouter = require('./router').default;
		ReactDOM.render(<NextRouter/>, document.getElementById('root'));
	});
}