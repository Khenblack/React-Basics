import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';

class App extends Component {

  state = {
    news: JSON,
    filtered: []
  }

  getKeyword = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.news.filter(item => {
      return item.title.indexOf(keyword) !== -1;
    });
    this.setState({
      filtered
    });
  }

  render() {
    const newFiltered = this.state.filtered;
    const newsWhole = this.state.news;

    return (
      <div>
        <Header keywords={this.getKeyword} />
        <NewsList news={newFiltered.length === 0 ? newsWhole : newFiltered}>
          Hello dudes
        </NewsList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));