import React  from 'react';
import './search.css';

export default class Search extends React.Component {
    render() {
        return ( <div className="search">
                  <div>
                      <label className="control-label" >Show done</label>
                      <input type="checkbox" id="show-done"/>
                  </div>

                  <div>
                      <input  className="form-control"  type="text" placeholder="Search..."/>
                  </div>
              </div>
        )
    }
}
