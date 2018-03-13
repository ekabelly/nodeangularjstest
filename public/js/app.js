const app = angular.module("App", ["ngRoute"]);

app.config($routeProvider => {
	$routeProvider.when('/', {
		templateUrl: 'tasks.html'
	}).when('/customers', {
		templateUrl: 'customers.html'
	}).when('/tasks', {
		templateUrl: 'tasks.html'
	});
});