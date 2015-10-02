nickFlicks.controller('ReviewsCtrl',  function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;


//Shows the current movie review when it matches the id for the movie review.
  if ($stateParams.reviewId) {
        $scope.currentReview = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
    }
});
