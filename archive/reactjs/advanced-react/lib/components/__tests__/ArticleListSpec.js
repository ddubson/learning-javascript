import React from 'react';
import {shallow} from 'enzyme';
import ArticleList from '../ArticleList';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {id: 'a', title: 'a', body: 'a'},
      b: {id: 'b', title: 'b', body: 'a'}
    },
    store: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList
      {...testProps}
    />);

    expect(wrapper.find('ArticleContainer').length).toEqual(2);
    expect(wrapper).toMatchSnapshot();
  });
});