nickFlicks.controller('ReviewsCtrl',  function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;

  $scope.currentReview = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
});
