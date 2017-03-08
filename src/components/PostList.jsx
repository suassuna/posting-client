import React from 'react';
import { Link } from 'react-router';

export default class PostList extends React.Component {

  getPosts() {
    return this.props.posts || [];
  }

  render() {
    return <ul className="demo-list-icon mdl-list">
      {this.getPosts().map(post =>
        <li key={post.title} className="mdl-list__item">
          <Link className="mdl-list__item-primary-content" to={`/posts/${post.id}`}>
            <i className="material-icons mdl-list__item-icon">message</i>
            {post.title}
          </Link>
        </li>)}
      </ul>;
  }
}
