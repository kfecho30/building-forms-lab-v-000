// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
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
