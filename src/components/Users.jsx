import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import UserList from './UserList';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <form action="#">
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" id="sample6" />
            <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
          </div>
          <UserList users={this.props.users} />
        </div>
      </form>
    );
  }
}
