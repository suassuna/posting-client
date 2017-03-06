import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import UserList from '../../src/components/UserList';

describe('UserList', () => {

  it('renders one list item for each user', () => {
    const users = [
      {name: 'John'},
      {name: 'Kendra'},
      {name: 'Mike'},
      {name: 'Lucy'}
    ];

    const component = renderIntoDocument(
      <UserList users={users} />
    );

    const listItems = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(listItems.length).to.equal(4);
  });

  it('renders user name', () => {
    const users = [
      {name: 'John'},
      {name: 'Kendra'}
    ];

    const component = renderIntoDocument(
      <UserList users={users} />
    );

    const listItems = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(listItems[0].textContent).to.contains('John');
    expect(listItems[1].textContent).to.contains('Kendra');
  });

});
