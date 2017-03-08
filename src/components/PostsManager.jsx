import React from 'react';
import Posts from './Posts';

export default class PostsManager extends React.Component {
  getPost(postId) {
    return this.props.posts.find(entry => entry.id == postId);
  }

  render() {
    return <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--3-col">
        <Posts posts={this.props.posts} />
      </div>
      <div className="mdl-cell mdl-cell--9-col">
        {
          this.props.children && React.cloneElement(this.props.children, {
              post: this.getPost(this.props.params.postId)
          })
        }
      </div>
    </div>;

  }

}
