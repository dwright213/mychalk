chalk.controller("ChalkControl", function ChalkControl($scope) {
  $scope.chalkUnit = {
    price: 1
  }

  $scope.calculatePrice = function() {
    $scope.totalCost = Math.pow($scope.desiredAmount, 3)
  }
});
