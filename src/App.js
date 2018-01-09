/* eslint react/no-did-mount-set-state:0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';
import { Switch } from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';


class App extends Component {
  state ={
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      // console.log(movies)
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Switch>
            <Route path="/test" component={Test} />
            {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
const Test = () => {
  <h1>TEST</h1>;
};
