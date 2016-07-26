(function() {
angular.module('workout', ['ngRoute', 'ui.router', 'ngFileUpload'])
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
	}
	$scope.updateCity = function() {
		var request = {
			userId: $scope.user._id,
			city: $scope.user.city
		}
		$http.post('/api/profile/updateCity', request).success(function() {
			refresh();
		})
	}
	$scope.updateState = function() {
		var request = {
			userId: $scope.user._id,
			state: $scope.user.state
		}
		$http.post('/api/profile/updateState', request).success(function() {
			refresh();
		})
	}
	$scope.updateHeight = function() {
		var request = {
			userId: $scope.user._id,
			height: $scope.user.height
		}
		$http.post('/api/profile/updateHeight', request).success(function() {
			refresh();
		})
	}
	$scope.updateWeight = function() {
		var request = {
			userId: $scope.user._id,
			weight: $scope.user.weight
		}
		$http.post('/api/profile/updateWeight', request).success(function() {
			refresh();
		})
	}
	$scope.updateBio = function() {
		var request = {
			userId: $scope.user._id,
			bio: $scope.user.bio
		}
		$http.post('/api/profile/updateBio', request).success(function() {
			refresh();
		})
	}
	$scope.addProduce = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			quantity: $scope.item.quantity,
			type: 'produce',
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addMeat = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			quantity: $scope.item.quantity,
			type: 'meat',
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh()
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
.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/html/profile.html',
			controller: 'mainController'
		})
		.when('/day', {
			templateUrl: '/html/day.html',
			controller: 'mainController'
		})
		.when('/workout', {
			templateUrl: '/html/workout.html',
			controller: 'mainController'
		})
		.when('/profile', {
			templateUrl: '/html/profile.html',
			controller: 'mainController'
		})
		.when('/edit-profile', {
			templateUrl: '/html/edit-profile.html',
			controller: 'mainController'
		})
		.when('/save-profile', {
			templateUrl: '/html/profile.html',
			controller: 'mainController'
		})
		

				
	}]);

angular.module('workout')
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
//		.state("workout", {
//			url: "/workout",
//			templateUrl: "/html/workout.html"
//		})
//		.state("workout.monday", {
//			url: "/monday",
//			templateUrl: "/html/monday.html"
//		})
//		.state("workout.tuesday", {
//			url: "/tuesday",
//			templateUrl: "/html/tuesday.html"
//		})
//		.state("workout.wednesday", {
//			url: "/wednesday",
//			templateUrl: "/html/wednesday.html"
//		})
//		.state("workout.thursday", {
//			url: "/thursday",
//			templateUrl: "/html/thursday.html"
//		})
//		.state("workout.friday", {
//			url: "/friday",
//			templateUrl: "/html/friday.html"
//		})
//		.state("workout.saturday", {
//			url: "/saturday",
//			templateUrl: "/html/saturday.html"
//		})
//		.state("workout.sunday", {
//			url: "/sunday",
//			templateUrl: "/html/sunday.html"
//		})
//		.state("profile", {
//			url: "/profile",
//			templateUrl: 'html/profile.html'
//		})
//		.state("day", {
//			url: "/day",
//			templateUrl: 'html/day.html'
//		})
//		.state("edit-profile", {
//			url: "/edit-profile",
//			templateUrl: 'html/edit-profile.html'
//		})
//		.state("save-profile", {
//			url: "/save-profile",
//			templateUrl: 'html/profile.html'
//		})

})
}());		





































