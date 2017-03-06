import React from 'react';

export default class PostList extends React.Component {

  getUsers() {
    return this.props.posts || [];
  }

  render() {
    return <ul className="demo-list-icon mdl-list">
      {this.getUsers().map(post =>
        <li key={post.title} className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
          <i className="material-icons mdl-list__item-icon">message</i>
          {post.title}
        </span>
      </li>)}
      </ul>;
  }
}
