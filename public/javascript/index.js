(function() {
angular.module('workout', ['ui.router', 'ngFileUpload'])
angular.module('workout')
	.controller('mainController', ['$scope', '$http', 'Upload', function($scope, $http, Upload) {
	var itemsArray = [];
	$http.get('/api/me').then(function(returnData) {
		$scope.user = returnData.data;
		if($scope.user.city !== "") {
			$scope.user.city = $scope.user.city + ",";
		};
		if($scope.user.city == "undefined,") {
			$scope.user.city = "";
		};
		if($scope.user.state !== "") {
			$scope.user.state = $scope.user.state.toUpperCase();
			$scope.user.state = $scope.user.state.substring(0,2);
		};
		if($scope.user.height !== "" && $scope.user.weight !== "") {
			$scope.user.height = $scope.user.height + " " + "|";
		};
		if($scope.user.height === "undefined |") {
			$scope.user.height = "";
		};
		if($scope.user.weight === "undefinedlbs") {
			$scope.user.weight = "";
		};
		if($scope.user.weight !== "") {
			$scope.user.weight = $scope.user.weight + "lbs";
		};
	});
	$scope.$watch(function() {
		return $scope.file
	}, function() {
		$scope.upload($scope.file);
	});
	$scope.upload = function(file) {
		if(file) {
			file.upload = Upload.upload({
				url: '/api/profile/editPhoto',
				method: 'POST',
				data: {file: file, userId: $scope.user._id}
			});
			file.upload.then(function(response) {
				file.result = response.data;
			});
		};	
	};
	var refresh = function(id) {
		var data = {
		}
		$http.get('/api/items/get/' + $scope.userId, data).success(function(response) {
			$scope.itemsArray = response;
			$scope.item = "";
			$scope.user.image = $scope.user.image || 'https://s-media-cache-ak0.pinimg.com/236x/8e/29/f2/8e29f2925bc2e7d5a05fa21f369ab80f.jpg';
			for(var i = 0; i < response.length; i++) {
				var day = new Date;
				var x = day.getDay();
				if(response[i].day === x) {
					response[i].current = true;
				}
				else {
					response[i].current = false;
				}
			}	
		});
	};
	refresh();
	$scope.updateName = function() {
		var request = {
			userId: $scope.user._id,
			name: $scope.user.name
		}
		$http.post('/api/profile/updateName', request).success(function() {
			refresh();
		})
	};
	$scope.updateCity = function() {
		var request = {
			userId: $scope.user._id,
			city: $scope.user.city
		}
		$http.post('/api/profile/updateCity', request).success(function() {
			refresh();
		})
	};
	$scope.updateState = function() {
		var request = {
			userId: $scope.user._id,
			state: $scope.user.state
		}
		$http.post('/api/profile/updateState', request).success(function() {
			refresh();
		})
	};
	$scope.updateHeight = function() {
		var request = {
			userId: $scope.user._id,
			height: $scope.user.height
		}
		$http.post('/api/profile/updateHeight', request).success(function() {
			refresh();
		})
	};
	$scope.updateWeight = function() {
		var request = {
			userId: $scope.user._id,
			weight: $scope.user.weight
		}
		$http.post('/api/profile/updateWeight', request).success(function() {
			refresh();
		})
	};
	$scope.updateBio = function() {
		var request = {
			userId: $scope.user._id,
			bio: $scope.user.bio
		}
		$http.post('/api/profile/updateBio', request).success(function() {
			refresh();
		})
	};
	// MONDAY //
	$scope.addUpperMon = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			theDay: "Monday",
			day: 1,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerMon = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "lower",
			theDay: "Monday",
			day: 1,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreMon = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "core",
			theDay: "Monday",
			day: 1,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioMon = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "cardio",
			theDay: "Monday",
			day: 1,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	// TUESDAY //
	$scope.addUpperTue = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			theDay: "Tuesday",
			day: 2,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerTue = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "lower",
			theDay: "Tuesday",
			day: 2,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreTue = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "core",
			theDay: "Tuesday",
			day: 2,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioTue = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "cardio",
			theDay: "Tuesday",
			day: 2,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	// WEDNESDAY //
	$scope.addUpperWed = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			theDay: "Wednesday",
			day: 3,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerWed = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "lower",
			theDay: "Wednesday",
			day: 3,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreWed = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "core",
			theDay: "Wednesday",
			day: 3,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioWed = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "cardio",
			theDay: "Wednesday",
			day: 3,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	// THURSDAY //
	$scope.addUpperThu = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			theDay: "Thursday",
			day: 4,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerThu = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "lower",
			theDay: "Thursday",
			day: 4,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreThu = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "core",
			theDay: "Thursday",
			day: 4,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioThu = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "cardio",
			theDay: "Thursday",
			day: 4,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	// FRIDAY //
	$scope.addUpperFri = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			theDay: "Friday",
			day: 5,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerFri = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "lower",
			theDay: "Friday",
			day: 5,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreFri = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "core",
			theDay: "Friday",
			day: 5,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioFri = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "cardio",
			theDay: "Friday",
			day: 5,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	// SATURDAY //
	$scope.addUpperSat = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			theDay: "Saturday",
			day: 6,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerSat = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "lower",
			theDay: "Saturday",
			day: 6,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreSat = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "core",
			theDay: "Saturday",
			day: 6,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioSat = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "cardio",
			theDay: "Saturday",
			day: 6,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	// SUNDAY //
	$scope.addUpperSun = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			theDay: "Sunday",
			day: 0,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerSun = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "lower",
			theDay: "Sunday",
			day: 0,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreSun = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "core",
			theDay: "Sunday",
			day: 0,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioSun = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "cardio",
			theDay: "Sunday",
			day: 0,
			current: undefined,
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	////////////////////////////////////////////////////////////
	$scope.delete = function(id) {
		$http.delete('/api/items/delete/' + id).success(function(response) {
			refresh();
		});	
	};
}]);
angular.module('workout')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/profile")
	$stateProvider
		.state('profile', {
			url: "/profile",
			templateUrl: "/html/profile.html",
			controller: "mainController"
		})
		.state('monday', {
			templateUrl: "/html/monday.html",
			controller: "mainController"
		})
		.state('tuesday', {
			templateUrl: "/html/tuesday.html",
			controller: "mainController"
		})
		.state('wednesday', {
			templateUrl: "/html/wednesday.html",
			controller: "mainController"
		})
		.state('thursday', {
			templateUrl: "/html/thursday.html",
			controller: "mainController"
		})
		.state('friday', {
			templateUrl: "/html/friday.html",
			controller: "mainController"
		})
		.state('saturday', {
			templateUrl: "/html/saturday.html",
			controller: "mainController"
		})
		.state('sunday', {
			templateUrl: "/html/sunday.html",
			controller: "mainController"
		})
		.state('/edit-profile', {
			url: "/edit-profile",
			templateUrl: "/html/edit-profile.html",
			controller: "mainController"
		})
		.state('/save-profile', {
			url: "/save-profile",
			templateUrl: "/html/profile.html",
			controller: "mainController"
		})
		.state('today', {
			url: "/today",
			templateUrl: "/html/today.html",
			controller: "mainController"
		})
		.state('days.monday', {
			url: "/monday",
			templateUrl: "/html/days.mon.html",
			controller: "mainController"
		})
		.state('days.tuesday', {
			url: "/tuesday",
			templateUrl: "/html/days.tue.html",
			controller: "mainController"
		})
		.state('days.wednesday', {
			url: "/wednesday",
			templateUrl: "/html/days.wed.html",
			controller: "mainController"
		})
		.state('days.thursday', {
			url: "/thursday",
			templateUrl: "/html/days.thu.html",
			controller: "mainController"
		})
		.state('days.friday', {
			url: "/friday",
			templateUrl: "/html/days.fri.html",
			controller: "mainController"
		})
		.state('days.saturday', {
			url: "/saturday",
			templateUrl: "/html/days.sat.html",
			controller: "mainController"
		})
		.state('days.sunday', {
			url: "/sunday",
			templateUrl: "/html/days.sun.html",
			controller: "mainController"
		})	
	})
}());		





































