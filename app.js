var nickFlicks = angular.module('nickFlicks', ['ui.router']);

nickFlicks.config(function($stateProvider) {

  //Upon loading the page, this is the page that comes up.
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

//When the enter button is clicked on the homepage, this is the page the renders.
  $stateProvider.state('reviews', {
    url:"/reviews",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/reviews.html',
        controller: 'ReviewsCtrl'
      },
    }
  });

//When a link is clicked on the reviews.html page, this is the page that is loaded. 
  $stateProvider.state('reviewInDepth', {
    url:"/:reviewId",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/review.detail.html',
        controller: 'ReviewsCtrl'
      },
    }
  });

});
