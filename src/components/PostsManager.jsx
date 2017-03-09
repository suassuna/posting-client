import React from 'react';
import {List} from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Posts from './Posts';

export default class PostsManager extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getPost(postId) {
    console.log(this.props.posts.get(postId, List()));
    return this.props.posts.get(postId, List());
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
