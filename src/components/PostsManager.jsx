import React from 'react';
import {List} from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Posts from './Posts';
import { connect } from 'react-redux';
import { setPostFilter } from '../actions/index';

export default class PostsManager extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  handleSearchChange(event) {
    this.props.setPostFilter(event.target.value);
  }

  getPost(postId) {
    return this.props.posts.get(postId, List());
  }

  render() {
    return <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--3-col">
        <Posts
          posts={this.props.posts}
          searchValue={this.props.postFilter}
          onSearchChange={this.handleSearchChange} />
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

  componentWillUnmount() {
    this.props.setPostFilter("");
  }

}

const getFilteredPosts = (posts, filter) => {
  return posts && posts.filter(p => p.get('title').toLowerCase().includes(filter.toLowerCase()));
};

const mapStateToProps = (state) => {
  return {
    posts: getFilteredPosts(state.posts, state.postFilter),
    postFilter: state.postFilter
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setPostFilter: (filter) => {
      dispatch(setPostFilter(filter))
    }
  }
}

export const PostsContainer = connect(
  mapStateToProps,
  { setPostFilter }
)(PostsManager);
