import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <div>
      <h1>{this.props.post.get("title")}</h1>
      <p>{this.props.post.get("content")}</p>
    </div>;
  }

}
