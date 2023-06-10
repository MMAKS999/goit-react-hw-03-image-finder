import { Component } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
// import { toast } from 'react-toastify';


export class SearchBar extends Component {
  state = {
    search: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // відслідковування введення і запис в стейт
  handleChange = ev => {
    const { value } = ev.currentTarget;
    this.setState({ search: value });
  };
  // передача значень форми в Арр
  handleSubmit = ev => {
    ev.preventDefault();
    const { search } = this.state;
    if (search.trim() === '') {
      //  toast.error('Wow so easy!');
      Swal.fire('Please enter a request');
      return;
    }
    this.props.onSubmit(search);
  };

  render() {
    const { search } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
