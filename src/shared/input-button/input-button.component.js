import React from 'react';
import Input from '../input/input.component';
import Button from '../button/button.component';


export default class InputBtn extends React.PureComponent  {
  constructor(props){
    super(props);
    this.state = {
      value: props.value || ''
    }
  }

  render() {

    const btn = {
      name: 'add',
      classesA: 'btn btn-primary',
      callback: () => this.props.callback(this.state.value)
    };

    return (
      <div className="input-group">
        <Input placeholder={this.props.placeholder}
               value={this.state.value}
               callback={val => this.setState({value: val})}/>
        <span className="input-group-btn">
            <Button {...btn}/>
      </span>
      </div>
    )
  }
}