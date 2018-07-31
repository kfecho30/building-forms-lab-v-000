import React, { Component } from 'react'
import BandInput from './BandInput'
import Bands from './Bands'

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
