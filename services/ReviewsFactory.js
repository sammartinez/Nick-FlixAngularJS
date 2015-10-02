nickFlicks.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};

  factory.reviews = [
    {
      title: 'Star Wars',
      reviewMovie: 'It is the best movie of all time...'
    }];

  factory.addReview = function() {
    factory.reviews.push({title: factory.reviewTitle, reviewMovie: factory.reviewMovie});
    factory.reviewTitle = null;
    factory.reviewMovie = null;
  };
  return factory;
});
