### using `create-react-app` to make the basic framework
### create the Movie component and add props on it
```

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
   {/* <h1 className="App-title">{welcome}</h1> */}
          {/* <Welcome text="welcome to using props" toggle={this.state.toggle}/> */}

             {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>{this.state.input}</h3> */}

        {/* <input type="text" value={this.state.input} onChange={this.updateInput.bind()}/> */}
        {/* <input type="text" ref={(input)=>{this.text = input}}/> */}


        {/* <button onClick={this.submit.bind(this)}>show</button> */}
```
### using the `PropTypes` to control the type of each prop
* a prop type for every single prop
* isrequired or defaultprop
### setup api
* using the `fetch` method to get the api from the movie-database website in `componentDidMount` lifecycle
* using `async` as callback function, by using the `await`, we have to wait for the json is ready
* try and catch is just making sure it does not come out some errors
* `setState` set the movies' states
* using the `map` list the array with ids and output the info into the Movie component

### install eslint
* `npm i -s eslint eslint-config-airbnb eslint-plugin-react`
* `eslint --init` 
* preference > setting `"eslint.autoFixOnSave": true`
* .eslintrc.js 
```
   "rules": {
      "react/jsx-filename-extension": 0,
      "function-paren-newline": 0
    }
```
* adding `//eslint-disable-line react/no-did-mount-set-state` behind the red underline or on the top of the file `/* eslint react/no-did-mount-set-state:0 */`

### stateless function
```
const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
  </div>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,

};
```
### router 
`<Route path="" /> <Link to='' />`
```
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

```
* two path, the id comes in from the path
* create the movidetail.js and change the path to the specific movie
* using the data by `setSate` to the movie

###
