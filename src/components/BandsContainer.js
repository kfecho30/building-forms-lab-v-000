import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
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
    todos: state.todos
  }
}

export default connect(mapStateToProps)(BandsContainer);
