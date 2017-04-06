import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }
  update = (ev) => {
    const title = ev.target.value;
    this.setState({
      value: title
    });
    this.props.callback(title);
  };

  render () {
    return <input className="form-control"
           type="text"
           value={this.state.value}
           onChange={(ev) => this.update(ev)}/>
  }

}