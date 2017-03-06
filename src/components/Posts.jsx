import React from 'react';
import PostList from './PostList';

export default class Posts extends React.Component {

  render() {
    return (
      <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample7">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" id="sample7" />
            <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
          </div>
          <PostList posts={this.props.posts} />
        </div>
      </div>
    );
  }
}