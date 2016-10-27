angular.module('NoteWrangler').controller('NotesShowController', function(Note, $scope, $routeParams, $location) {
    $scope.note = Note.get({id: $routeParams.id});
    // Attention above!!!!! Syntax above is "({})" not ({{}}), you don't need to use double bracket in 
    // the javascript, only in HTML, because in this case, it's actually calling a function or method 
    // of Note service.
    $scope.deleteNote = function(note) {
        note.$remove().then(function() {
            $location.path('/notes');
        });
    };
    console.log($scope.note);
});