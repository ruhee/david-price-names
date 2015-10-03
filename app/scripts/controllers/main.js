'use strict';

/**
 * @ngdoc function
 * @name davidPriceNicknamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the davidPriceNicknamesApp
 */
angular.module('davidPriceNicknamesApp')
  .controller('MainCtrl', function ($scope, $sanitize) {
    $scope.nameSubmitted = false;
  	$scope.shuffledName = '';
  	$scope.namePieces = null;
  	$scope.nameString = '';
  	$scope.changeText = false;

  	$scope.getNickname = function(input) {
  		if(input != undefined) {
  			// clear stuff first
  			$scope.shuffledName = '';
  			$scope.namePieces = null;
  			$scope.nameString = '';
  			$scope.changeText = false;

  			$scope.shuffledName = $scope.shuffleNames();
  			$scope.nameSubmitted = true;

  			$scope.namePieces = $sanitize(input).toLowerCase().trim().split(' ');

  			if($scope.namePieces.length > 1) {
  				// Only call Stro "Tylenol," because that's an actual David Price nickname!
  				if($scope.namePieces.indexOf('marcus') != -1 && $scope.namePieces.indexOf('stroman') != -1) {
  					$scope.shuffledName = 'Tylenol';
  				}
  				// some other goofiness because I felt like it
  				else if($scope.namePieces.indexOf('josh') != -1 && $scope.namePieces.indexOf('donaldson') != -1) {
  					$scope.shuffledName = 'Dirtbag MVP';
  				}
  				else if($scope.namePieces.indexOf('jose') != -1 && $scope.namePieces.indexOf('bautista') != -1) {
  					$scope.shuffledName = 'Gun Show';
  				}
  				else if($scope.namePieces.indexOf('dickey') != -1) {
  					$scope.shuffledName = 'Skywalker';
  				}
  				else if($scope.namePieces.indexOf('david') != -1 && $scope.namePieces.indexOf('price') != -1) {
  					$scope.shuffledName = 'Slim Duncan';
  					$scope.changeText = true;
  				}
  				// Also an actual David Price nickname. Dude's on fire.
  				else if($scope.namePieces.indexOf('kevin') != -1 && $scope.namePieces.indexOf('pillar') != -1) {
  					$scope.shuffledName = 'Prime Time';
  				}

  				// for everybody else, put nickname before last word in name, if multi word ('Ruhee "Catfish" Dewji')
  				for(var i = 0; i < $scope.namePieces.length-1; i++) {
  					if($scope.namePieces[i] == 'ra' || $scope.namePieces[i] == 'r.a.') {
  						$scope.nameString += $scope.namePieces[i].toUpperCase() + ' ';
  					}
  					else {
  						$scope.nameString += $scope.capitalize($scope.namePieces[i]) + ' ';
  					}
  				}
  				$scope.nameString += ' &ldquo;'+$scope.shuffledName+'&rdquo; '+$scope.capitalize($scope.namePieces[($scope.namePieces.length-1)]);
  			}
  			else if($scope.namePieces != "") {
  				$scope.nameString = $scope.capitalize($scope.namePieces.toString()) + ' &ldquo;' + $scope.shuffledName + '&rdquo;';
  			}
  		}
  	};

    $scope.nicknames = [
    	"Beaver Grin",
    	"Man Bun",
    	"Top Knot",
    	"Dirtbag Boyfriend",
    	"Beard Rage",
    	"Chin Strap",
    	"Country Club",
    	"The Six-Three Express",
    	"Leather Circus",
    	"Rocketface",
    	"Panzerotti",
    	"Baby Bear",
    	"Duck Snort",
    	"Danny Ocean",
    	"Pumpkin Spice",
    	"Over Easy",
    	"Acid Trip",
    	"Turkey Dinner",
    	"Prius",
    	"Cinnabon",
    	"Sauce on the Side",
    	"That Ain't Baseball",
    	"Poppa Doc",
    	"The Reverend",
    	"Scooter",
    	"King Popcorn",
    	"Cineplex",
    	"Orville Redenbacher",
    	"Bacon Strip",
    	"MacGyver",
    	"Hands",
    	"Sweet Chili Heat",
    	"Cool Ranch",
    	"The Robe",
    	"Plush",
    	"Swiss Cheese",
    	"As Seen On TV",
    	"Cottonelle",
    	"Canyonero",
    	"Omega-3",
    	"Hey Smalls",
    	"Spiced Rum",
    	"PB&J",
    	"The Sidler",
    	"Egg Whites",
    	"Robemaster General",
    	"Mad Max",
    	"The Dude",
    	"Can O' Poop",
    	"Truck Stop",
    	"Tortellini",
    	"Save It Nerds",
    	"Stinky Cheese",
    	"Mini Wheats",
    	"Clif Bar",
    	"All Dressed",
    	"Oven McLovin",
    	"The Percolator",
    	"Bubbly",
    	"Monorail",
    	"Wailer",
    	"Waffles",
    	"Cinnamon Toast",
    	"Cap'n Crunch",
    	"Lucky Charm",
    	"Marshmallow",
    	"Oreo",
    	"Turbo",
    	"DeLorean",
    	"Shiny and Chrome",
    	"Stirrups",
    	"Side Eye",
    	"Shark",
    	"Bush Party",
    	"Breakfast Army",
    	"Hash Brown",
    	"Fully Dimed",
    	"Gordie Dougie",
    	"Milk Bag",
    	"Noodles",
    	"Sea Lion",
    	"Goal Horn",
    	"Soul Patch",
    	"Senator",
    	"The Prez",
    	"Terrycloth"
    ];

    $scope.shuffleNames = function() {
    	return $scope.nicknames[Math.floor(Math.random()*$scope.nicknames.length)];
    };

    $scope.capitalize = function(str) {
    	var capitalized = '';

    	// if there's an apostrophe, capitalize first letter of word + first letter after apostrophe
    	if(str.indexOf("'") != -1) {
    		var chunks = str.split("'");
    		for(var i in chunks) {
    			capitalized += chunks[i].slice(0,1).toUpperCase()+chunks[i].slice(1);
    			if(i < chunks.length-1) {
    				capitalized += "'";
    			}
    		}
    	}
    	else {
    		capitalized = str.slice(0,1).toUpperCase()+str.slice(1);
    	}

    	return capitalized;
    }

  });
