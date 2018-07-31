// Add BandInput component
import React, { Component } from 'react'

export default class BandInput extends Component {
  constructor(){
    super();
    this.state={
      text:''
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onKeyDown={this.handleChange} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
