app.controller('ManyController', function ($scope, Take2Service) {

    $scope.tasks = [];

    Take2Service.getMany()
        .then( function (many) {
            $scope.tasks = many.data
        })

    $scope.submitTask = function (boolean) {
        if (boolean) {
          Take2Service.postOne($scope.task)
              .then( function(task) {
                  const newTask = task.data[0]
                  $scope.tasks.push(newTask)
                  $scope.task = {}
                  $scope.newTask.$setPristine()
              })
        }
    }
})
