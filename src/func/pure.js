import React from 'react';

export default function pure(func) {
  class PureComponentWrap extends React.PureComponent {
    render() {
      return func(this.props, this.context)
    }
  }
  return PureComponentWrap
}