var nickFlicks = angular.module('nickFlicks', ['ui.router']);

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

  $stateProvider.state('reviews', {
    url:"",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/reviews.html'
      },
    }
  });

});
