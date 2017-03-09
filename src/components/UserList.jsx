import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getUsers() {
    return this.props.users || [];
  }

  render() {
    return <ul className="demo-list-icon mdl-list">
      {this.getUsers().map(user =>
        <li key={user.get("name")} className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
          <i className="material-icons mdl-list__item-icon">person</i>
          {user.get("name")}
        </span>
      </li>)}
      </ul>;
  }
}
