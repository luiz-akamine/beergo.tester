'use strict';
app.controller('homeController', ['$scope', '$rootScope', '$window', '$document', '$route', 
	function ($scope, $rootScope, $window, $document, $route) {
    /*
	document.addEventListener('deviceready', onDeviceReady, false);
    $("#btnLigarBluetooth").addEventListener('touchend', manageConnection, false);

	angular.bootstrap(document, "beergo.test"); 
	*/

	$scope.message = "";

	bluetoothSerial.isEnabled(
            function () { $scope.bluetoothEnabled = true; },
            function () { $scope.bluetoothEnabled = false; $scope.message = "Bluetooth desativado. Ligue!" }
        );	
	
	//Lista teste de bluetooths encontrados
	$scope.bluetoothList = [];		

	$scope.blueToothPowerOn = function() {
		bluetoothSerial.enable(function () { $scope.bluetoothEnabled = true; $scope.message = ""; $scope.$apply(); }, null);
	};
	
	//bluetoothSerial.isEnabled(function(){ $scope.bluetoothEnabled = true }, function(){ $scope.bluetoothEnabled = false });		
    $scope.findDevices = function() {
    	$scope.message = "Procurando dispositivos...";
        // list the available BT ports:
        console.log('searching...');
        bluetoothSerial.discoverUnpaired(
            function(results) {
            	console.log('ok');
            	$scope.message = ""; $scope.$apply();
            	
            	console.log(results);

                $scope.bluetoothList = results;
                
                if ($scope.bluetoothList.length <= 0) {
                	$scope.message = "Nenhum dispositivo encontrado";                	
                }
                $scope.$apply();
            },
            function(error) {
            	console.log('err');
                $scope.message = JSON.stringify(error);
                $scope.$apply();
            }
        );
    }

	/*
	var onDeviceReady = function() {
		debugger;
        // check to see if Bluetooth is turned on.
        // this function is called only
        //if isEnabled(), below, returns success:
        var findDevices = function() {
            // list the available BT ports:
            bluetoothSerial.discoverUnpaired(
                function(results) {
                    $scope.bluetoothList = JSON.stringify(results);
                },
                function(error) {
                    alert(JSON.stringify(error));
                }
            );
        }
        // if isEnabled returns failure, this function is called:
        var notEnabled = function() {
            alert("Bluetooth is not enabled.");
        }

         // check if Bluetooth is on:
        bluetoothSerial.isEnabled(
            findDevices,
            notEnabled
        );
    }    

    var manageConnection = function() {

        // connect() will get called only if isConnected() (below)
        // returns failure. In other words, if not connected, then connect:
        var connect = function () {
            // if not connected, do this:
            // clear the screen and display an attempt to connect
            app.clear();
            app.display("Attempting to connect. " +
                "Make sure the serial port is open on the target device.");
            // attempt to connect:
            bluetoothSerial.connect(
                app.macAddress,  // device to connect to
                app.openPort,    // start listening if you succeed
                app.showError    // show the error if you fail
            );
        };

        // disconnect() will get called only if isConnected() (below)
        // returns success  In other words, if  connected, then disconnect:
        var disconnect = function () {
            app.display("attempting to disconnect");
            // if connected, do this:
            bluetoothSerial.disconnect(
                app.closePort,     // stop listening to the port
                app.showError      // show the error if you fail
            );
        };

        // here's the real action of the manageConnection function:
        bluetoothSerial.isConnected(disconnect, connect);
    };
    */

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