import React  from 'react';

export default (props) => (
              <div className="progress progress-striped active">
                  <div className="progress-bar" style={ { width: props.percentage } }></div>
              </div>
);