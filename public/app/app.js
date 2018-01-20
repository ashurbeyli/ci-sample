angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [
        {
            title: 'Asd',
            description: 'asd desc'
        },
        {
            title: 'Bsd',
            description: 'description'
        }
    ]
});