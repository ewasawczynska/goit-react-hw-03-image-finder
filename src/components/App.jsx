import { Component } from 'react';
import { SearchBar } from 'components';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchQuery } = this.state;
    return <SearchBar onSubmit={this.handleSearch} />;
  }
}
