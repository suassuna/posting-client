import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import { fromJS } from 'immutable';
import PostList from '../../src/components/PostList';

describe('PostList', () => {

  it('renders one list item for each post', () => {
    const posts = fromJS([
      {title: 'Hello!'},
      {title: 'Something interesting...'},
      {title: 'Oh my!!!'},
      {title: 'Have you heard?'}
    ]);

    const component = renderIntoDocument(
      <PostList posts={posts} />
    );

    const listItems = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(listItems.length).to.equal(4);
  });

  it('renders post title', () => {
    const posts = fromJS([
      {title: 'Hello!'},
      {title: 'Something interesting...'}
    ]);

    const component = renderIntoDocument(
      <PostList posts={posts} />
    );

    const listItems = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(listItems[0].textContent).to.contains('Hello!');
    expect(listItems[1].textContent).to.contains('Something interesting...');
  });

});
