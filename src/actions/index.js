export const SET_USER_FILTER = 'SET_USER_FILTER';
export const SET_POST_FILTER = 'SET_POST_FILTER';

export function setUserFilter(filter) {
  return { type: SET_USER_FILTER, filter };
}

export function setPostFilter(filter) {
  return { type: SET_POST_FILTER, filter };
}
