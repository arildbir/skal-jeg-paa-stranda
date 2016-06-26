// SERVICE
hukApp.service ('byService', function() {
   this.by = "Oslo"; 
    
});

hukApp.service ('verService', ['$resource' ,function($resource) {
   
    this.getVer = function(onsketBy, antallDager) {
        var verAPI = $resource ("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

        return verAPI.get ({ q:onsketBy, cnt:antallDager, appid:"eab1797d303e7653a5ba171340f19d87"});
        console.log($scope); 
    }
    
}]);