import { Component } from 'react';
import {
  SearchHeader,
  SearchBtn,
  SearchForm,
  SearchLabel,
  SearchInput,
} from './Searchbar.styles';
//---------------------------------------------//
class Searchbar extends Component {
  state = {
    query: '',
  };

  handlerInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    const { query } = this.state;
    e.preventDefault();

    if (!query.trim()) {
      alert('empty field');
      return;
    }
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handlerSubmit}>
          <SearchBtn type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchBtn>

          <SearchInput
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            onChange={this.handlerInput}
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

export { Searchbar };
