import React from 'react';

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  change = (ev) => {
    const text = ev.target.value;
    this.setState({
      value: text
    });
    this.props.callback(text)
  };

  render() {
    return (
      <textarea className="form-control"
                rows="5"
                value={this.state.value}
                onChange={(ev) => this.change(ev)}></textarea>
    )
  }
}