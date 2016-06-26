// CONTROLLERS
hukApp.controller('hjemController', ['$scope', '$location', 'byService', function($scope, $location, byService) {
    
    $scope.by = byService.by;
    
    $scope.$watch ('by', function() {
        byService.by = $scope.by;
    });
    
    $scope.submit = function () {
        $location.path ("/varmeldingen");
    }
    
}]);

hukApp.controller('værmeldingController', ['$scope', '$routeParams', 'byService', 'verService', function($scope, $routeParams, byService, verService) {
    
    $scope.by = byService.by;
    $scope.dager = $routeParams.dager || '2';
    
    $scope.vResultat = verService.getVer($scope.by, $scope.dager);
    
    $scope.konverterTilCelcius = function (degK) {
        return Math.round (degK - 273,15);
    }
    $scope.konverterDato = function (dato) {
        return new Date (dato * 1000);
    }
    
}]);