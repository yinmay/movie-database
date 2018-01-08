import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie'


class App extends Component {
  state ={
    movies:[]
  }

  async componentDidMount(){
    try{
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      const movies = await res.json()
      console.log(movies)
      this.setState({
        movies:movies.results
      })
    }catch(e){
      console.log(e)

    }

  }

  // state={
  //   input:'mei'
  // }

  // updateInput = (event)=>{
  //   this.setState({
  //     input:event.target.value.trim()
  //   })
  // }

  // submit=()=>{
   
  //     console.log(this.text.value)
  
  // }

  render() {
    console.log(this.state.movies)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">{welcome}</h1> */}
          {/* <Welcome text="welcome to using props" toggle={this.state.toggle}/> */}
        </header>

      {this.state.movies.map((movie) => <Movie key={movie.id} movie={movie} desc={movie.desc}></Movie>)}

        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>{this.state.input}</h3> */}
 
        {/* <input type="text" value={this.state.input} onChange={this.updateInput.bind()}/> */}
        {/* <input type="text" ref={(input)=>{this.text = input}}/> */}
        
        
        {/* <button onClick={this.submit.bind(this)}>show</button> */}
      </div>
    );
  }
}

export default App;
