// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input 
        type="text"
        placeholder="Add here"
        value={this.state.name}
        onChange={(event) => this.handleChange(event)}/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput

//BandInput component
//1) has a text input field
//2) has an initial state with name key set to empty string
//3) changes the local state on input change
//4) has a prop, addBand, that is called when the form is submitted
//5) using addBand, calls dispatch when form is submitted