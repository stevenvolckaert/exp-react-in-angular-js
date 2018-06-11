import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloComponent } from './components/HelloComponent';
import { TestComponent } from './components/TestComponent';
import { GitHubUserList } from './components/GitHubUserList';

import './index.less';

interface IndexComponentProps {
  reactVersion: string;
}

const IndexComponent = ({ reactVersion }: IndexComponentProps) => (
  <div>
    <h1>ReactJS v{reactVersion}</h1>
    <h2>HelloComponent (2x)</h2>
    <HelloComponent firstName="Clark" lastName="Kent" />
    <HelloComponent firstName="Mickey" lastName="Mouse" />
    <h2>TestComponent</h2>
    <TestComponent fooBar="3" baz="something bazzy" />
    <GitHubUserList />
  </div>
);

ReactDOM.render(
  <IndexComponent reactVersion={React.version} />,
  document.getElementById('app-root')
);
