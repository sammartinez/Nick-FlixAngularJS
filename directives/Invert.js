nickFlicks.directive("invert", function() {
  return function(scope, element) {
    element.bind("click", function() {
      element.toggleClass("bg-danger");
    });
  }
});
