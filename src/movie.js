import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class Movie extends Component{
    static propTypes={
          // An object taking on a particular shape
        movie: PropTypes.shape({
            title:PropTypes.string.isRequired,           
        }),
        desc:PropTypes.string
    }

    static defaultProps = {
        desc:'description is not available'

    }


    render(){
        return (
            <div >
                <h3>
                    {this.props.movie.title}        
                </h3>
                <p> 
                    {this.props.desc}    
                </p>
            
          </div>
        )
    }
  
}