//Directive used in order to change the whole body to be inverted from the original color
nickFlicks.directive("invert", function() {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.toggleClass("invert");
    });
  }
});
