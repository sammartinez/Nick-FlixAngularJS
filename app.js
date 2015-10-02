var nickFlicks = anuglar.module('nickFlicks', ['ui.router']);

nickFlicks.config(function($stateProvider) {
  $stateProvider.state('home', {
    url:"",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/home.html'
      },
    }
  });

  //This is where the next page would go.. 

});
