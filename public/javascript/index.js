(function() {
angular.module('workout', ['ui.router', 'ngFileUpload'])
angular.module('workout')
	.controller('mainController', ['$scope', '$http', 'Upload', function($scope, $http, Upload) {
	var itemsArray = [];
	$http.get('/api/me').then(function(returnData) {
		$scope.user = returnData.data;
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
		var data = {}
		$http.get('/api/items/get/' + $scope.userId, data).success(function(response) {
			$scope.itemsArray = response;
			$scope.item = "";
			$scope.count = $scope.itemsArray.length.toString();
			$scope.user.image = $scope.user.image || 'https://s-media-cache-ak0.pinimg.com/236x/8e/29/f2/8e29f2925bc2e7d5a05fa21f369ab80f.jpg';
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
	$scope.addUpperMon = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			day: "mon",
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addUpperTue = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			day: "tue",
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addUpperWed = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			day: "wed",
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addUpperThu = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			day: "thu",
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addUpperFri = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			day: "fri",
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addUpperSat = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			day: "sat",
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addUpperSun = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			reps: $scope.item.reps,
			sets: $scope.item.sets,
			weight: $scope.item.weight,
			type: "upper",
			day: "sun",
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
			day: "mon",
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
			day: "tue",
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
			day: "wed",
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
			day: "thu",
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
			day: "fri",
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
			day: "sat",
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
			day: "sun",
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
			day: "mon",
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
			day: "mon",
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
			day: "tue",
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
			day: "wed",
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
			day: "thu",
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
			day: "fri",
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
			day: "sat",
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
			day: "sun",
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
			day: "mon",
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
			day: "tue",
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
			day: "wed",
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
			day: "thu",
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
			day: "fri",
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
			day: "sat",
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
			day: "sun",
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh();
		}).error(function(error) {
			console.log(error);
		});
	};
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
		.state('days', {
			url: "/days",
			templateUrl: "/html/days.html",
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
		.state('workout', {
			url: "/workout", 
			templateUrl: "/html/workout.html",
			controller: "mainController"
		})
		.state('workout.monday', {
			url: "/monday", 
			templateUrl: "html/workout.monday.html",
			controller: 'mainController'
		})
		.state('workout.tuesday', {
			url: "/tuesday", 
			templateUrl: "html/workout.tuesday.html",
			controller: "mainController"
		})
		.state('workout.wednesday', {
			url: "/wednesday", 
			templateUrl: "html/workout.wednesday.html",
			controller: "mainController"
		})
		.state('workout.thursday', {
			url: "/thursday", 
			templateUrl: "html/workout.thursday.html",
			controller: "mainController"
		})
		.state('workout.friday', {
			url: "/friday", 
			templateUrl: "html/workout.friday.html",
			controller: "mainController"
		})
		.state('workout.saturday', {
			url: "/saturday", 
			templateUrl: "html/workout.saturday.html",
			controller: "mainController"
		})
		.state('workout.sunday', {
			url: "/sunday", 
			templateUrl: "html/workout.sunday.html",
			controller: "mainController"
		})	
	})
}());		





































