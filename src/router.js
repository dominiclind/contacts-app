import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';

import App from './containers/App';
import Home from './containers/Home';
import Edit from './containers/Edit';
import NotFound from './containers/NotFound';

const store = configureStore();


const Router = (props) => (

  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <Provider store={store}>
    	<App>
	      <Switch onUpdate={() => window.scrollTo(0, 0)}>
	        <Route exact path='/' component={Home}/>
	        <Route path='/edit/:id?' component={Edit}/>
	        <Route path='*' component={NotFound}/>
	      </Switch>
      </App>
    </Provider>
  </BrowserRouter>
);

export default Router;