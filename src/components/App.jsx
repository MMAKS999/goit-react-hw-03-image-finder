// import { ToastContainer } from 'react-toastify';
import { SearchBar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Component } from 'react';

export class App extends Component {
  state = {
    searchName: '',
    foundArray: null,
    loading: false,
    error: null,
    status: 'idle'
  };

  // створення нового масиву обєктів з потрібних властивостей з масиву обєктів Арі
  filterFoundArray(array) {
    return array.hits.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    }));
  }

  // считування пошукового запиту
  changeSearch = dataSearch => {
    this.setState({ searchName: dataSearch });
  };

  // componentDidMount() {
  //   const { searchName } = this.state;
  //   const key = '35881269-5244fadfdfc6e51dbaa5f3ad4';
  //   fetch(
  //     `https://pixabay.com/api/?q=${searchName}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then(res => res.json())
  //     .then(foundArr =>
  //       this.setState({ foundArray: this.filterFoundArray(foundArr) })
  //     );
  //   console.log('hi');
  // }

  // Перевірка стейту і новий запит
  componentDidUpdate(prevProps, prevState) {
    const { searchName, loading } = this.state;
    if (prevState.searchName !== searchName) {
      const key = '35881269-5244fadfdfc6e51dbaa5f3ad4';
      this.setState({ loading: true, foundArray:null});
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${searchName}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(new Error(`no information on request ${searchName}`));
          })
          .then(foundArr =>
            this.setState({ foundArray: this.filterFoundArray(foundArr) })
          )
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }

    console.log(this.state.foundArray);
    console.log(this.state.searchName);
  }

  render() {
    const { foundArray, loading, error,status } = this.state;

    if (status === 'idle') {
      return <div>loading...</div>;
    }
    if (status === 'pending') {
      return <div>loading...</div>;
    }
     if (status === 'rejected') {
       return <h1>все пропало</h1>;
    }
    if (status === 'resolved') {
      <div>
        <SearchBar onSubmit={this.changeSearch} />
        <ImageGallery foundArray={foundArray} />
      </div>
      
    }

    return (
      <div>
        {error && <h1>все пропало</h1>}
        {loading && <div>loading...</div>}
        <SearchBar onSubmit={this.changeSearch} />
        <ImageGallery foundArray={foundArray} />
        {/* <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
      </div>
    );
  }
}
