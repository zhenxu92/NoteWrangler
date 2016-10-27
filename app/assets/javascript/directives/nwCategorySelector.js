angular.module('NoteWrangler').directive('nwCategorySelector', function(Category) {
    return {
        replace: true,
        restrict: 'E',
        require: "?ngModel",
        templateUrl: "assets/templates/directives/nwCategorySelector.html",
        link: function(scope, element, attrs, ngModelCtrl) {
            scope.categories = Category.query(); 
            
            var activeCategory = {};
            scope.isActive = function(category) {
                    return activeCategory && activeCategory.id === category.id;
            };
            // every time when client click on the category tab, it gives the 
            // activeCategory object the category object, then, for sure:
            // activeCategory.id === category.id.
            // Q: But why there returns a category object? A: Is it because of
            // this directive controller which has a category in categories repeated
            // so it deals with a category object every time.
            scope.toggleCategory = function(category) {
                if(activeCategory === category) {
                    activeCategory = {};
                } else {
                    activeCategory = category;
                }
                ngModelCtrl.$setViewValue(activeCategory);
            };
            
            ngModelCtrl.$render = function() {
                activeCategory = ngModelCtrl.$viewValue;
            }
        }
    }; 
});