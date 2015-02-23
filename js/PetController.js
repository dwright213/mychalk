chalk.controller("PetControl", function PetControl($scope) {

  $scope.calculatePrice = function() {
    $scope.totalCost = Math.pow($scope.desiredAmount, 3)
  }

  $scope.colors = [
    {name: "green"},
    {name: "blue"},
    {name: "orange"},
    {name: "red"}
  ];
});
