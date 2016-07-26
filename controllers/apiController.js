var User = require('../models/user');
var Item = require('../models/items');
var fs = require('fs-extra');
var path = require('path');

module.exports = {
	updatePhoto: function(req, res) {
		var file = req.files.file;
		var userId = req.body.userId;
		console.log("user " + userId + " fs submitting ", file);
		var uploadDate = new Date();
		var tempPath = file.path;
		var targetPath = path.join(__dirname, "../uploads/" + userId + uploadDate + file.name);
		var savePath = "/uploads/" + userId + uploadDate + file.name;
		fs.rename(tempPath, targetPath, function(err) {
			if(err) {
				console.log(err)
			}
			else {
				User.findById(userId, function(err, userData) {
					var user = userData;
					user.image = savePath;
					user.save(function(err) {
						if(err) {
							console.log("failed save");
							res.json({status: 500})
						}
						else {
							console.log("save successful");
							res.json({status: 200})
						}
					})
				})
			}
		})
	},
	updateName: function(req, res) {
		var name = req.body.name;
		var userId = req.body.userId;
		User.findById(userId, function(err, userData) {
			var user = userData;
			user.name = name;
			user.save(function(err) {
				if(err) {
					console.log("fail");
					res.json({status: 500});
				}
				else {
					console.log("success");
					res.json({status: 200});
				}
			})
		})
	},
	updateCity: function(req, res) {
		var city = req.body.city;
		var userId = req.body.userId;
		User.findById(userId, function(err, userData) {
			var user = userData;
			user.city = city;
			user.save(function(err) {
				if(err) {
					console.log("fail");
					res.json({status: 500});
				}
				else {
					console.log("success");
					res.json({status: 200});
				}
			})
		})
	},
	updateState: function(req, res) {
		var state = req.body.state;
		var userId = req.body.userId;
		User.findById(userId, function(err, userData) {
			var user = userData;
			user.state = state;
			user.save(function(err) {
				if(err) {
					console.log("fail");
					res.json({status: 500});
				}
				else {
					console.log("success");
					res.json({status: 200});
				}
			})
		})
	},
	updateHeight: function(req, res) {
		var height = req.body.height;
		var userId = req.body.userId;
		User.findById(userId, function(err, userData) {
			var user = userData;
			user.height = height;
			user.save(function(err) {
				if(err) {
					console.log("fail");
					res.json({status: 500});
				}
				else {
					console.log("success");
					res.json({status: 200});
				}
			})
		})
	},
	updateWeight: function(req, res) {
		var weight = req.body.weight;
		var userId = req.body.userId;
		User.findById(userId, function(err, userData) {
			var user = userData;
			user.weight = weight;
			user.save(function(err) {
				if(err) {
					console.log("fail");
					res.json({status: 500});
				}
				else {
					console.log("success");
					res.json({status: 200});
				}
			})
		})
	},
	updateBio: function(req, res) {
		var bio = req.body.bio;
		var userId = req.body.userId;
		User.findById(userId, function(err, userData) {
			var user = userData;
			user.bio = bio;
			user.save(function(err) {
				if(err) {
					console.log("fail");
					res.json({status: 500});
				}
				else {
					console.log("success");
					res.json({status: 200});
				}
			})
		})
	},
	postItems: function(req, res) {
		var items = new Item({
			name: req.body.name,
			reps: req.body.reps,
			sets: req.body.sets,
			weight: req.body.weight,
			type: req.body.type,
			day: req.body.day,
			userId: req.user._id
		});
		items.save(function(err, allItems) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allItems);
			}
		})
	},
	getItems: function(req, res) {
		Item.find({userId: req.user._id}).exec(function(err, allItems) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allItems)
			}
		}
	)},
	deleteItems: function(req, res) {
		var id = req.params.id;
		Item.findOneAndRemove({_id: id}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				res.json(doc);
			}
		})
	}
};


















