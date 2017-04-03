import React  from 'react';
import './add-new.styles.css';

export default class AddNew extends React.Component {
  placeholder = "Add new " + this.props.for;
  render() {
    return (
      <div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder={this.placeholder}/>
          <span className="input-group-btn">
            <button className="btn btn-default">Add</button>
          </span>
        </div>
      </div>
    )
  }
}