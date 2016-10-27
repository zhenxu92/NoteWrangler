// it doesn't matter if you use " " or ' ' for NoteWrangler to be pointed
angular.module("NoteWrangler").factory('Category', function($resource) {
    return $resource('/categories/:id');
});