import angular from 'angular';

const mainController = ($scope, $timeout, $log) => {
  $log.debug("Initializing AngularJS controller 'mainController'");

  $scope.angularVersion = `v${angular.version.full}`;
  $scope.isAppLoading = true;
  $scope.firstName = 'John';
  $scope.lastName = 'Doe';

  $timeout(() => {
    $scope.isAppLoading = false;
  }, 1000);
};

angular.module('app').controller('mainController', ['$scope', '$timeout', '$log', mainController]);
