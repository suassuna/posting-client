import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { UsersContainer } from './components/Users';
import { PostsContainer } from './components/PostsManager';
import App from './components/App';
import Post from './components/Post';
import reducer from './reducers/index';
import store, { history } from './store';

const routes =
<Route path='/' component={App}>
  <Route path="/posts" component={PostsContainer}>
    <Route path="/posts/:postId" component={Post} />
  </Route>
  <Route path="/users" component={UsersContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
