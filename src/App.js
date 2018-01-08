import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie'

const movies=[
  {id:1, title:'super star',desc:'space movie'},
    {id:2, title:'36th olufuia'},
    {id:3, title:'world war 2'}



]
class App extends Component {

  state={
    input:'mei'
  }

  updateInput = (event)=>{
    this.setState({
      input:event.target.value.trim()
    })
  }

  submit=()=>{
   
      console.log(this.text.value)
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">{welcome}</h1> */}
          {/* <Welcome text="welcome to using props" toggle={this.state.toggle}/> */}
        </header>

      {movies.map((movie) => <Movie key={movie.id} movie={movie} desc={movie.desc}></Movie>)}

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
