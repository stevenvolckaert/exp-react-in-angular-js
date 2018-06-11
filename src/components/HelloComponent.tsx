import * as React from 'react';

interface HelloComponentProps {
  firstName: string;
  lastName: string;
}

export const HelloComponent = (props: HelloComponentProps) => (
  <div>
    <span>
      Hello, {props.firstName} {props.lastName}, nice to meet you!
    </span>
  </div>
);
