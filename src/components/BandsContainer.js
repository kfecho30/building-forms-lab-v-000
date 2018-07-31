import React, { Component } from 'react'
import BandInput from './BandInput'
import Bands from './Bands'
import {connect} from 'react-redux';

export default class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}
