import React from 'react';
import './chekbox.styles.css';

export default class Checkbox extends React.Component {
  constructor(props) {
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
      <div className="checkbox-x">
        <input type="checkbox"
               value={this.state.value}
               checked={this.state.value}
               onChange={ev => this.check(ev)}/>
        <label>{this.props.label}</label>
      </div>
    )
  }
}