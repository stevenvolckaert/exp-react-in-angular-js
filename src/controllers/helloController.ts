import angular from 'angular';

type Person = {
  firstName: string;
  lastName: string;
}

const helloController = ($scope, $log) => {
  $log.debug("Initializing AngularJS controller 'helloController'");

  $scope.isBusy = false;
  let clarkKent: Person = { firstName: 'Clark', lastName: 'Kent'};
  $scope.person = clarkKent;
  let mickeyMouse: Person = { firstName: 'Mickey', lastName: 'Mouse'};
  $scope.person_2 = mickeyMouse;
};

angular.module('app').controller('helloController', ['$scope', '$log', helloController]);
