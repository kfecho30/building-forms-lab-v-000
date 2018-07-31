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
      text: e.target.valuel
    })
  }

  render() {
    return(
      <div>
        <form>
          <input type="text" onKeyDown={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default BandInput
