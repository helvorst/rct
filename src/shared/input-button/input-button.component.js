import React from 'react';
import Input from '../input/input.component';
import Button from '../button/button.component';


export default class InputBtn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }
  }

  click = (fn) => {
    fn(this.state.value);
  };

  render() {

    return (
      <div className="input-group">
        <Input placeholder={this.props.placeholder}
               value={this.state.value}
               callback={val => this.setState({value: val})}/>
        <span className="input-group-btn">
          {this.props.buttons.map((btn, ind) => <Button key={ind}
                                                        {...btn}
                                                        callback={() => this.click(btn.callback)}/>)}
      </span>
      </div>
    )
  }
}