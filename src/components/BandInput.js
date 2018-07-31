// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super();
    this.state={
      text:''
    }
  }

  handleChange = () => {
    
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
