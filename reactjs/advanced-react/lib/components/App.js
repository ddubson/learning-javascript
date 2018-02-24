import React from 'react';
import PropTypes from 'prop-types';
import { ArticleList } from './ArticleList';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickBy';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onStoreChange = this.onStoreChange.bind(this);
    this.state = this.props.store.getState();
  }

  static childContextTypes = {
    store: PropTypes.object,
  };

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    let {articles,searchTerm} = this.state;

    if(searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm)
      })
    }

    return (
      <div>
        <SearchBar doSearch={this.props.store.setSearchTerm}/>
        <ArticleList
          articles={articles}
        />
      </div>
    );
  }
}

export default App;
