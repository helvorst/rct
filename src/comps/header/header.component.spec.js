import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.component';

describe('SNAPSHOT', () => {
  it('Header should render element', () => {
    const header = renderer.create(
      <Header title="Sometitle"/>
    );
    const tree = header.toJSON();
    expect(tree).toMatchSnapshot();
  })
});