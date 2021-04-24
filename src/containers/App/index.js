import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Users from '@containers/Users';
import createRedux from '../../store';

const store = createRedux();
axios.defaults.baseURL = 'http://www.mocky.io/v2';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Users}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
