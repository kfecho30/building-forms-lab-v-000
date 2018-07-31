// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {
  constructor(){
    super();
    this.state={
      text:''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.addBand}>
          <input type="text" onKeyDown={this.handleChange} value={this.state.text}/>
        </form>
      </div>
    )
  }
}

export default BandInput
