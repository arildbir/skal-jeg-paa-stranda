// DIRECTVES
hukApp.directive ("varRapport", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/varRapport.html',
        replace: true,
        scope: {
            varDag: "=", //bruker = siden varRapport er et objekt som deles mellom modell og view.
            dayValue: "&", //dette er en funksjon, derfor brukes &
            nightValue: "&", //dette er en funksjon, derfor brukes &
            konverterTilDato: "&",
            konverterTilDato2: "&",
            datoFormat: "@"
        }
    }
    
});