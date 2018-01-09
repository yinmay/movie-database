/* eslint react/no-did-mount-set-state:0 */
import React, { Component } from 'react';
import Movie from './movie';


class MoviesList extends Component {
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
      <div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
      </div>

    );
  }
}

export default MoviesList;

