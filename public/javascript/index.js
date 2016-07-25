(function() {
angular.module('workout', ['ngRoute', 'ui.router', 'ngFileUpload'])
angular.module('workout')
	.controller('mainController', ['$scope', '$http', 'Upload', function($scope, $http, Upload) {
		console.log("hello from index.js");
		var activitysArray = [];
	$http.get('/api/me').then(function(returnData) {
		$scope.user = returnData.data;
	});
	var refresh = function(id) {
		var data = {}
		$http.get('/api/activitys/get/' + $scope.userId, data).success(function(response) {
			$scope.activitysArray = response;
			$scope.activity = "";
			$scope.user.image = $scope.user.image || 'https://s-media-cache-ak0.pinimg.com/236x/8e/29/f2/8e29f2925bc2e7d5a05fa21f369ab80f.jpg';
		});
	};
	refresh();
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
	$scope.updateName = function() {
		var request = {
			userId: $scope.user._id,
			name: $scope.user.name
		}
		$http.post('/api/profile/updateName', request).success(function() {
		})
	}
	$scope.updateCity = function() {
		var request = {
			userId: $scope.user._id,
			city: $scope.user.city
		}
		$http.post('/api/profile/updateCity', request).success(function() {
		})
	}
	$scope.updateState = function() {
		var request = {
			userId: $scope.user._id,
			state: $scope.user.state
		}
		$http.post('/api/profile/updateState', request).success(function() {
		})
	}
	$scope.updateHeight = function() {
		var request = {
			userId: $scope.user._id,
			height: $scope.user.height
		}
		$http.post('/api/profile/updateHeight', request).success(function() {
		})
	}
	$scope.updateWeight = function() {
		var request = {
			userId: $scope.user._id,
			weight: $scope.user.weight
		}
		$http.post('/api/profile/updateWeight', request).success(function() {
		})
	}
	$scope.updateBio = function() {
		var request = {
			userId: $scope.user._id,
			bio: $scope.user.bio
		}
		$http.post('/api/profile/updateBio', request).success(function() {
		})
	}
	// MONDAY //
	$scope.addUpperMon = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'upper',
			day: 'monday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerMon = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'lower',
			day: 'monday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreMon = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'core',
			day: 'monday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioMon = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'cardio',
			day: 'monday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	///////////
	// TUESDAY //
	$scope.addUpperTue = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'upper',
			day: 'tuesday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerTue = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'lower',
			day: 'tuesday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreTue = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'core',
			day: 'tuesday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioTue = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'cardio',
			day: 'tuesday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	///////////
	// WEDNESDAY //
	$scope.addUpperWed = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'upper',
			day: 'wednesday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerWed = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'lower',
			day: 'wednesday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreWed = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'core',
			day: 'wednesday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioWed = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'cardio',
			day: 'wednesday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	// THURSDAY //
	$scope.addUpperThu = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'upper',
			day: 'thursday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerThu = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'lower',
			day: 'thursday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreThu = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'core',
			day: 'thursday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioThu = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'cardio',
			day: 'thursday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	// FRIDAY //
	$scope.addUpperFri = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'upper',
			day: 'friday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerFri = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'lower',
			day: 'friday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreFri = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'core',
			day: 'friday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioFri = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'cardio',
			day: 'friday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	// SATURDAY //
	$scope.addUpperSat = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'upper',
			day: 'saturday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerSat = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'lower',
			day: 'saturday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreSat = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'core',
			day: 'saturday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioSat = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'cardio',
			day: 'saturday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	// SUNDAY //
	$scope.addUpperSun = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'upper',
			day: 'sunday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addLowerSun = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'lower',
			day: 'sunday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCoreSun = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'core',
			day: 'sunday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addCardioSun = function() {
		$scope.activitysArray = [];
		var request = {
			name: $scope.activity.name,
			reps: $scope.activity.reps,
			sets: $scope.activity.sets,
			weight: $scope.activity.weight,
			type: 'cardio',
			day: 'sunday'
		}
		$http.post('/api/activitys/post', request).success(function(response) {
			$scope.activitysArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.delete = function(id) {
		$http.delete('/api/activitys/delete/' + id).success(function(response) {
			refresh();
		});	
	};
}]);



angular.module('workout')
.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/html/profile.html',
			controller: 'mainController'
		})
//		.when('/day', {
//			templateUrl: '/html/day.html',
//			controller: 'mainController'
//		})
//		.when('/workout', {
//			templateUrl: '/html/workout.html',
//			controller: 'mainController'
//		})
//		.when('/profile', {
//			templateUrl: '/html/profile.html',
//			controller: 'mainController'
//		})
//		.when('/edit-profile', {
//			templateUrl: '/html/edit-profile.html',
//			controller: 'mainController'
//		})
//		.when('/save-profile', {
//			templateUrl: '/html/profile.html',
//			controller: 'mainController'
//		})
				
	}]);
angular.module('workout')
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("workout", {
			url: "/workout",
			templateUrl: "/html/workout.html"
		})
		.state("workout.monday", {
			url: "/monday",
			templateUrl: "/html/monday.html"
		})
		.state("workout.tuesday", {
			url: "/tuesday",
			templateUrl: "/html/tuesday.html"
		})
		.state("workout.wednesday", {
			url: "/wednesday",
			templateUrl: "/html/wednesday.html"
		})
		.state("workout.thursday", {
			url: "/thursday",
			templateUrl: "/html/thursday.html"
		})
		.state("workout.friday", {
			url: "/friday",
			templateUrl: "/html/friday.html"
		})
		.state("workout.saturday", {
			url: "/saturday",
			templateUrl: "/html/saturday.html"
		})
		.state("workout.sunday", {
			url: "/sunday",
			templateUrl: "/html/sunday.html"
		})
		.state("profile", {
			url: "/profile",
			templateUrl: 'html/profile.html'
		})
		.state("day", {
			url: "/day",
			templateUrl: 'html/day.html'
		})
		.state("edit-profile", {
			url: "/edit-profile",
			templateUrl: 'html/edit-profile.html'
		})
		.state("save-profile", {
			url: "/save-profile",
			templateUrl: 'html/profile.html'
		})

})
}());




































