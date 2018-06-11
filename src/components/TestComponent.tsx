import * as React from 'react';

interface ITestComponentProps {
  fooBar: string;
  baz: string;
}

export class TestComponent extends React.PureComponent<ITestComponentProps> {
  render() {
    return (
      <ul>
        <li>fooBar: {this.props.fooBar}</li>
        <li>baz: {this.props.baz}</li>
      </ul>
    );
  }
}
