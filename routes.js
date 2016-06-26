// ROUTES
hukApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'hjemController'
    })
    
    .when('/varmeldingen', {
        templateUrl: 'pages/varMelding.html',
        controller: 'værmeldingController'
    })
    
    .when('/varmeldingen/:dager', {
        templateUrl: 'pages/varMelding.html',
        controller: 'værmeldingController'
    })
    
});