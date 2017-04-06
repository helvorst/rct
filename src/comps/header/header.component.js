import React  from 'react';
import Search from '../../shared/search/search.component';
import './header.css';
export default class Header extends React.Component {
    render(){
        return( <div className="header">
                  <h1>
                      To-Do List
                  </h1>
                  <Search actions={this.props.actions}/>
              </div>
        )
    }
}