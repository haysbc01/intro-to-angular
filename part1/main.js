angular.module("intro", []);

angular
  .module("intro")
  .controller("master", masterCtrl);

masterCtrl.inject = ["$scope"];

function masterCtrl($scope){
  //$scope.printMessage = "Here is your printed message!"

  //$scope.message = "Header";

  $scope.printMessage = function () {

    console.log("message goes here!");

    $scope.message = "Here is your printed message!";
  }

/*
  $scope.printList = function () {
    console.log("list should appear");
    $scope.ul = "Here is the Unordered list";
    $scope.li = "list item";
  }
  */
}
