import React, { Component } from 'react'

class Button extends Component {
    render () {
       
        return (
            <div>
               <button className="btn btn-success" onClick={this.props.handleTrigger}>{this.props.title}</button>
               
             
            </div>
        )
    }

}

export default Button