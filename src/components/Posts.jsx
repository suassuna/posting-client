import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import PostList from './PostList';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <form>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample7">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input
              className="mdl-textfield__input"
              type="text"
              id="sample7"
              value={this.props.searchValue}
              onChange={this.props.onSearchChange} />
            <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
          </div>
          <PostList posts={this.props.posts} />
        </div>
      </form>
    );
  }
}
