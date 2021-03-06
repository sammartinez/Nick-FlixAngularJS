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

/* When a review is clicked on the reviews.reviewDetail.html page, it'll render the page
to the ui-view body */
  $stateProvider.state('reviews.reviewDetail', {
    url:"/:reviewId",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/reviews.reviewDetail.html',
        controller: 'ReviewsCtrl'
      },
    }
  });

});
