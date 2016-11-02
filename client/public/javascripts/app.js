var app = angular.module('take2App', [])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/many.html',
            controller: 'ManyController'
        })
})
