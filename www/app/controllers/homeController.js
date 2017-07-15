'use strict';
app.controller('homeController', ['$scope', function ($scope) {
	
	//Checar se bluetooth está ativo
	$scope.bluetoothEnabled = true;

	//Lista teste de bluetooths encontrados
	$scope.bluetoothList = [];		

	//Busca dispositivos:
	$scope.findBeerGo = function() {
		$scope.bluetoothList = 
			[
				{"ID": 123456, "Name": "Moto-G"},
				{"ID": 789042, "Name": "Iphone XXX"},
				{"ID": 566543, "Name": "S3"},
				{"ID": 566543, "Name": "BeerGo_1"},
				{"ID": 566543, "Name": "BeerGo_2"}
			];
	};

}]);