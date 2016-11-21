"use strict"
// create module
// pass in the name and an empty array
var app = angular.module("ngModelApp", []);

// create controller
// pass in the name and the function
app.controller("ExampleCtrl", ExampleCtrl);

// contoller method
function ExampleCtrl ($scope) {
  $scope.txtChange = function() {
    console.log('ng-Change');
  }
}

app.controller("Ctrl1", CtrlOne);
app.controller("Ctrl2", CtrlTwo)

function CtrlOne ($scope) {
  $scope.testVar = "testVar inside CtrlOne";
}

function CtrlTwo ($scope) {
  // $scope.testVar = "testVar inside CtrlTwo";
}

app.controller("Ctrl1as", CtrlOneAs);
app.controller("Ctrl2as", CtrlTwoAs);

function CtrlOneAs () {
  this.testVar = "testVar inside CtrlOneAs";
}

function CtrlTwoAs () {
  this.testVar = "testVar inside CtrlTwoAs";
}
