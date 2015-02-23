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
  $scope.shapes = [
    {name: "square"},
    {name: "triangular"},
    {name: "polygonal"},
    {name: "dodecahedron"}
  ];
  $scope.sizes = [
    {name: "large"},
    {name: "medium"},
    {name: "small"}
    ];
});
