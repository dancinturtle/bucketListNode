var beltExam = angular.module('beltExam', ['ngRoute']);

beltExam.config(function($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/login.html'
  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html'
  })
  .when('/profile/:name', {
    templateUrl: 'partials/profile.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
