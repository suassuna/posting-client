import React from 'react';
import {List, Map} from 'immutable';
import {Link} from 'react-router';

const users = [
  {name: 'John'},
  {name: 'Kendra'},
  {name: 'Mike'},
  {name: 'Lucy'},
  {name: 'Martha'},
  {name: 'Josh'}
];
const posts = [
  {title: 'Hello!'},
  {title: 'Something interesting...'},
  {title: 'Oh my!!!'},
  {title: 'Have you heard?'},
  {title: 'Go to the moon'},
  {title: 'Cupcake recipe'}
];

export default class App extends React.Component {
  render() {
    return <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Posting App</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link className="mdl-navigation__link" to="/">Users</Link>
            <Link className="mdl-navigation__link" to="/posts">Posts</Link>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <Link className="mdl-navigation__link" to="/">Users</Link>
          <Link className="mdl-navigation__link" to="/posts">Posts</Link>
        </nav>
      </div>
      <main className="mdl-layout__content">
        <div className="page-content">{React.cloneElement(this.props.children, {
          users: users,
          posts: posts
        })}</div>
      </main>
    </div>
  }
}
