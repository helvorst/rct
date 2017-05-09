import React from 'react';

export default (props) => {
  return <div>
    {/*{JSON.stringify(props)}*/}
    <button onClick={props.onUndo} disabled={!props.canUndo}>UNDO</button>
    <button onClick={props.onRedo} disabled={!props.canRedo}>REDO</button>
  </div>
};

