import React from "react";
import axios from 'axios';
import DataApi from 'state-api';
import { ArticleList } from "./ArticleList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.initialData.articles,
      authors: props.initialData.authors
    };
    this.articleActions.lookupAuthor = this.articleActions.lookupAuthor.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get('/data');
    const api = new DataApi(response.data);
    this.setState({
      articles: api.getArticles(),
      authors: api.getAuthors()
    })
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    )
  }
}

export default App;
