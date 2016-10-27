angular.module('NoteWrangler').factory('Note', function($resource) {
    //https://docs.angularjs.org/api/ngResource/service/$resource
    // in $resource service, '/notes/:id' is the url, {id: "@id"} is the param
    // and the update is the action which method is one of its method
    return $resource('/notes/:id', {id: "@id"}, {
        update: {
            method: 'PUT'
            // it doesn't matter if it is "PUT" or 'PUT'
        }
    }); 
});