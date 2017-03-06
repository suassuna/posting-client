import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Users';

const users = [
  {name: 'John'},
  {name: 'Kendra'},
  {name: 'Mike'},
  {name: 'Lucy'},
  {name: 'Martha'},
  {name: 'Josh'}
];

ReactDOM.render(
  <Users users={users} />,
  document.getElementById('app')
);
