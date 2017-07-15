//Arquivo principal de configuração da aplicação
var app = angular.module('beergo.test', ['ngRoute']);

//Configurações das rotas da aplicação
app.config(function ($routeProvider, $httpProvider, $compileProvider, $locationProvider) {
	    	
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    $httpProvider.defaults.headers.delete = {};
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';	

	$locationProvider.hashPrefix(''); 
	debugger;
	if (document.location.protocol == "file:") {
		$routeProvider.when("/home", {
			controller: "homeController",
			templateUrl: "/android_asset/www/app/views/home.html"
		});	

		$routeProvider.when("/login", {
			controller: "loginController",
			templateUrl: "/android_asset/www/app/views/login.html"
		});    

		$routeProvider.when("/tester", {
			controller: "testerController",
			templateUrl: "/android_asset/www/app/views/tester.html"
		});    
	}
	else {
		$routeProvider.when("/home", {
			controller: "homeController",
			templateUrl: "/app/views/home.html"
		});	

		$routeProvider.when("/login", {
			controller: "loginController",
			templateUrl: "/app/views/login.html"
		});    		

		$routeProvider.when("/tester", {
			controller: "testerController",
			templateUrl: "/app/views/tester.html"
		});    		
	}
    
    $routeProvider.otherwise({ redirectTo: "/login" });
});