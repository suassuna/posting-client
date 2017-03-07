import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Users from './components/Users';
import Posts from './components/Posts';
import App from './components/App';

const routes = <Route component={App}>
  <Route path="/posts" component={Posts} />
  <Route path="/" component={Users} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
);
