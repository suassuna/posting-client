import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Users';
import Posts from './components/Posts';

const users = [
  {name: 'John'},
  {name: 'Kendra'},
  {name: 'Mike'},
  {name: 'Lucy'},
  {name: 'Martha'},
  {name: 'Josh'}
];
const posts = [
  {title: 'Hello!'},
  {title: 'Something interesting...'},
  {title: 'Oh my!!!'},
  {title: 'Have you heard?'},
  {title: 'Go to the moon'},
  {title: 'Cupcake recipe'}
];

ReactDOM.render(
  <div>
    <Users users={users} />
    <Posts posts={posts} />
  </div>,
  document.getElementById('app')
);
