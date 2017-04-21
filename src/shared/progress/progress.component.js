import React  from 'react';
import {connect} from 'react-redux';

const sTp = (state, own) => ({list: state.todos, ...own});

export default connect(sTp)((props) => {
  const match = props.list.filter(x => x[props.property]);
  const percent = match.length / props.list.length * 100;

  return (
    <div className="progress progress-striped active">
      <div className="progress-bar" style={ {width: percent} }></div>
    </div>)
});