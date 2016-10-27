angular.module('NoteWrangler').controller('NotesCreateController', function($scope, Note, $location) {
    $scope.note = new Note();
    $scope.isSubmitting = false;
    
    $scope.saveNote = function(note) {
        $scope.isSubmitting = true;
        note.$save()
        .finally(function() {
            $scope.isSubmitting = false;
            $location.path('/notes');
            // the above line must be put inside finally function, or the page will not load the note
            // into the page after redirection.
        });

    };
});