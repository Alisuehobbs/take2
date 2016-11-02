app.controller('OneController', function ($scope, Take2Service, $routeParams, $location) {

    const id = $routeParams.id

    Take2Service.getOne(id)
        .then( function(task) {
            console.log('task.data[0]:', task.data[0]);
            $scope.task = task.data[0]
        })

    $scope.submitEdit = function (editedTask) {
        Take2Service.editOne($scope.task)
            .then( function() {
                $location.url('/')
            })
    }

    $scope.delete = function (deleteTask) {
        Take2Service.deleteOne(deleteTask.id)
            .then( function() {
                $location.url('/')
            })
    }

})
