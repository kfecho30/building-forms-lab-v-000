import React, { Component } from 'react'

export default class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => `<li>${band.name}</li>`)

  render() {
    return(
      <div>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}
