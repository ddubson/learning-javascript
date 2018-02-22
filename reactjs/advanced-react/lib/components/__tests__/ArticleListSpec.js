import React from 'react';
import {shallow} from 'enzyme';
import {ArticleList} from '../ArticleList';


describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {id: 'a', title: 'a', body: 'a', article: 'a'},
      b: {id: 'b', title: 'b', body: 'a', article: 'a'}
    },
    store: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList
      {...testProps}
    />);

    expect(wrapper.props().children.length).toEqual(2);
    expect(wrapper).toMatchSnapshot();
  });
});