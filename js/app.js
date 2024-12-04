
var app = angular.module('app', []);




app.controller('myController', function($scope) {
    $scope.clickCount = 0;
    $scope.message = "Hola Mundo Angular";
    $scope.incrementClickCount = function() {
        $scope.clickCount++;
    };
});
