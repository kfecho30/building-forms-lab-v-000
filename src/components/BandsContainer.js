import React, { Component } from 'react'
import BandInput from './BandInput.js'

export default class BandsContainer extends Component {
  render() {
    return(
      <div>
        <ul>
          <BandInput />
        </ul>
      </div>
    )
  }
}
