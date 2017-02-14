angular.module("part2", []);

angular
  .module("part2")
  .controller("master", masterCtrl);

  masterCtrl.inject = ["$scope"];

  function masterCtrl ($scope) {
    console.log($scope);

    $scope.link = "link 1"

      $scope.leavePage = function () {
        var answer = confirm ("Are you sure?");
        if (!answer) {
          event.preventDefault ();
          $scope.link = "";
        }
      }

    $scope.link2 = "link 2"

      $scope.leavePage2 = function () {
        var answer = confirm ("Are you sure?");
        if (!answer) {
          event.preventDefault ();
          $scope.link2 = "";
        }
      }

    $scope.link3 = "link 3"

      $scope.leavePage3 = function () {
        var answer = confirm ("Are you sure?");
        if (!answer) {
          event.preventDefault ();
          $scope.link3 = "";
        }
      }



}
