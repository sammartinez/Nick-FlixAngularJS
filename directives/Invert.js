nickFlicks.directive("invert", function() {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      element.toggleClass(attrs.invert);
    });
  }
});
