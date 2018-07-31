import React, { Component } from 'react'

class BandsContainer extends Component {
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

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer);
