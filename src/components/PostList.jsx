import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getPosts() {
    return this.props.posts || [];
  }

  render() {
    return <ul className="demo-list-icon mdl-list">
      {this.getPosts().map(post =>
        <li key={post.get("id")} className="mdl-list__item">
          <Link className="mdl-list__item-primary-content" to={`/posts/${post.get("id")}`}>
            <i className="material-icons mdl-list__item-icon">message</i>
            {post.get("title")}
          </Link>
        </li>)}
      </ul>;
  }
}
