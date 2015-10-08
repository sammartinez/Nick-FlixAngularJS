nickFlicks.factory('ReviewsFactory', function ReviewsFactory() {

  //Starting with a blank factory to use for the review.
  var factory = {};

  //Hard coding a few reviews into the page in order to see that the functionality is working.
  factory.reviews = [
    {
      title: 'Star Wars: The Force Awakens',
      reviewMovie: 'I mean I know this movie isn\'t out quite yet, but I am freaking out about how cool it\'s going to be. ',
      id: 1
    },
    {
      title: 'Fast and the Furious 7',
      reviewMovie: 'It was a good movie but it was defintely overdone with CGI. I remember the original ones being so much better.',
      id: 2
    },
    {
      title: 'Pitch Perfect 2',
      reviewMovie: 'Not as good as the first one I think but what sequel is am I right?!',
      id: 3
    },
  ];

/* Once the button is pressed to add another review on the reviews.html page, this function is used in order to push the
new review into the factory review. */
  factory.addReview = function() {
    factory.reviews.push({title: factory.reviewTitle, reviewMovie: factory.reviewMovie, id: factory.reviews.length + 1});
    factory.reviewTitle = null;
    factory.reviewMovie = null;
  };
  return factory;
});
