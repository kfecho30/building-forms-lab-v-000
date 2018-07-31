// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super();
    this.state={
      text:''
    }
  }

  render() {
    return(
      <div>
        <form>
          <input type="text"/>
        </form>
      </div>
    )
  }
}

export default BandInput
