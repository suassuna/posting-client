import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import UserList from './UserList';
import { connect } from 'react-redux';
import { setUserFilter } from '../actions/index';

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  handleChange(event) {
    this.props.setUserFilter(event.target.value);
  }

  render() {
    return (
      <form>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input
              className="mdl-textfield__input"
              type="text"
              id="sample6"
              value={this.props.userFilter}
              onChange={this.handleChange} />
            <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
          </div>
          <UserList users={this.props.users} />
        </div>
      </form>
    );
  }

  componentWillUnmount() {
    this.props.setUserFilter("");
  }
}

const getFilteredUsers = (users, filter) => {
  return users && users.filter(u => u.get('name').toLowerCase().includes(filter.toLowerCase()));
};

const mapStateToProps = (state) => {
  return {
    users: getFilteredUsers(state.users, state.userFilter),
    userFilter: state.userFilter
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setUserFilter: (filter) => {
      dispatch(setUserFilter(filter))
    }
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  { setUserFilter }
)(Users)
