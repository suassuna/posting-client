import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Post from '../../src/components/Post';

describe('Post', () => {

  it('renders post title and post content', () => {
    const post = {
        title: 'Hello!',
        content: "This is some great content, isn't it?"
      };

    const component = renderIntoDocument(
      <Post post={post} />
    );

    const titleItems = scryRenderedDOMComponentsWithTag(component, 'h1');
    const contentItems = scryRenderedDOMComponentsWithTag(component, 'p');

    expect (titleItems.length).to.equal(1);
    expect(titleItems[0].textContent).to.equal('Hello!');
    expect (contentItems.length).to.equal(1);
    expect(contentItems[0].textContent).to.equal("This is some great content, isn't it?");
  });

});
