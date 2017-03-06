import React from 'react';

export default class UserList extends React.Component {

  getUsers() {
    return this.props.users || [];
  }

  render() {
    return <ul className="demo-list-icon mdl-list">
      {this.getUsers().map(user =>
        <li key={user.name} className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
          <i className="material-icons mdl-list__item-icon">person</i>
          {user.name}
        </span>
      </li>)}
      </ul>;
  }
}
