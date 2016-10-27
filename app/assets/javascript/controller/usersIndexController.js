angular.module('NoteWrangler').controller('UsersIndexController', function(User, $scope) {
    $scope.users = User.query();
    console.log($scope.users);
});