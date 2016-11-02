var app = angular.module('take2App', ['ngRoute'])
//
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/many.html',
            controller: 'ManyController'
        })
        .when('/:id', {
            templateUrl: '../views/one.html',
            controller: 'OneController'
        })
})
