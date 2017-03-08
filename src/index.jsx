import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Users from './components/Users';
import PostsManager from './components/PostsManager';
import App from './components/App';
import Post from './components/Post';

const routes =
<Route path='/' component={App}>
  <Route path="/posts" component={PostsManager}>
    <Route path="/posts/:postId" component={Post} />
  </Route>
  <Route path="/users" component={Users} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
);
