import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

//✓ is a child of the app component
//3) renders a list element for each band
//4) renders each li with the correct name