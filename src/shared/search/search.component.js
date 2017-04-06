import React  from 'react';
import './search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            str: '',
            chk: false
        }
    }

    onCheckHandler = (ev) => {
        this.setState({
            chk: ev.target.checked
        });
        this.props.actions.onSearch(this.state.str, this.state.chk);
    };

    onChangeHandler = (ev) => {
        const str = ev.target.value;
        this.setState({
            str: str
        });
        this.props.actions.onSearch(str)
    };

    render() {
        return ( <div className="search">
                  <div>
                      <label className="control-label">Show done</label>
                      <input type="checkbox"
                             id="show-done"
                             value={this.state.chk}
                             checked={this.state.chk}
                             onChange={ev => this.onCheckHandler(ev)}/>
                  </div>

                  <div>
                      <input className="form-control"
                             type="text"
                             placeholder="Search..."
                             value={this.state.str}
                             onChange={ev => this.onChangeHandler(ev)}/>
                  </div>
              </div>
        )
    }
}
