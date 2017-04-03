import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  SET_USER_FILTER,
  SET_POST_FILTER
} from '../actions/index';

function userFilter(state = "", action) {
  switch (action.type) {
    case SET_USER_FILTER:
      return action.filter;
    default:
      return state;

  }
}

function postFilter(state = "", action) {
  switch (action.type) {
    case SET_POST_FILTER:
      return action.filter;
    default:
      return state;

  }
}

function users(state = [], action) {
  return state;
}

function posts(state = [], action) {
  return state;
}

const reducer = combineReducers({
  users,
  posts,
  userFilter,
  postFilter,
  routing: routerReducer
});

export default reducer;
