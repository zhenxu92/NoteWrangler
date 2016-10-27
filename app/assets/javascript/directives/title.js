angular.module('NoteWrangler').directive('title', function($timeout) {
    return function(scope, element, attrs) {
        $timeout(function() {
            $(element).tooltip();
        });  
        
        // prevent memory leaking, clean the event listener
        scope.$on('$destroy', function() {
            $(element).tooltip('destroy'); 
        });
    };                                   
});