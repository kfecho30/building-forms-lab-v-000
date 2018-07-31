import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => `<li>${band.name}</li>`)

  render() {
    return(
      <div>
        BandsContainer
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer);
