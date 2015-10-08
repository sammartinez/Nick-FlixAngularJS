nickFlicks.controller('ReviewsCtrl',  function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;

  //Finds the current review and displays it
  $scope.currentReview = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
});
