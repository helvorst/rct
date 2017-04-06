import React from 'react';

export default class Checkbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  check = (ev) => {
    const state = ev.target.checked;
    this.setState({
      value: state
    });
    this.props.callback(state);
  };

  render() {
    return (
      <input type="checkbox"
             value={this.state.value}
             checked={this.state.value}
             onChange={ev => this.check(ev)}/>
    )
  }
}