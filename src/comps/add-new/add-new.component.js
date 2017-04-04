import React  from 'react';
import './add-new.styles.css';

export default class AddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  addHandler = () => {
    const name = this.state.value;
    this.setState({
      value: ''
    });
    this.props.actions.onAdd(name, this.props.for);
  };

  changeHandler = (ev) => {
    this.setState({
      value: ev.target.value
    });
  };

  render() {
    const placeholder = "Add new " + this.props.for;
    return (
      <div>
        <div className="input-group">
          <input type="text" className="form-control"
                 placeholder={placeholder}
                 value={this.state.value}
                 onChange={ev => this.changeHandler(ev)}/>
          <span className="input-group-btn">
            <button className="btn btn-default"
                    onClick={this.addHandler}>Add</button>
          </span>
        </div>
      </div>
    )
  }
}