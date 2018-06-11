import angular from 'angular';
import 'ngreact';

var app = angular.module('app', ['react']);

import './controllers';

// TODO Move the import logic to separate module(s) named 'proceedix-<module-name>-react',
// then we just need to  import the module(s) here, instead of each component separately.
// -Steven Volckaert. June 7, 2018.

// Import and register React components
import { TestComponent } from './components/TestComponent';
app.value('TestComponent', TestComponent);

import { HelloComponent } from './components/HelloComponent';
app.value('HelloComponent', HelloComponent);

import { GitHubUserList } from './components/GitHubUserList';
app.value('GitHubUserList', GitHubUserList);

// Run the AngularJS app
app.run([
  '$http',
  '$log',
  function($http, $log) {
    $log.debug(`Loaded AngularJS v${angular.version.full}.`);
    $log.debug("Initializing AngularJS module 'app'");
  }
]);
