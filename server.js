// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var app = express();
// CONNECT TO DB \\
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workout');
// CONTROLLERS \\
var passportConfig = require('./config/passport');
var authenticationController = require('./controllers/authController');
var apiController = require('./controllers/apiController'); 
// SESSION SETUP \\
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// AUTHENTICATION ROUTES \\
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/uploads', express.static(__dirname + "/uploads"));
app.get('/auth/login', authenticationController.login);
app.post('/auth/login', authenticationController.processLogin);
app.post('/auth/signup', authenticationController.processSignup);
app.get('/auth/logout', authenticationController.logout);
// ROUTES \\
app.get('/api/me', function(req, res){
	res.send(req.user)
});
app.use(passportConfig.ensureAuthenticated);
app.get('/', function(req, res){
  res.sendFile('/html/index.html', {root : './public'})
});
app.post('/api/profile/editPhoto', multipartMiddleware, apiController.updatePhoto);
app.post('/api/profile/updateName', apiController.updateName);
app.post('/api/profile/updateCity', apiController.updateCity);
app.post('/api/profile/updateState', apiController.updateState);
app.post('/api/profile/updateHeight', apiController.updateHeight);
app.post('/api/profile/updateWeight', apiController.updateWeight);
app.post('/api/profile/updateBio', apiController.updateBio);
app.post('/api/items/post', apiController.postItems);
app.get('/api/items/get/:userId', apiController.getItems);
app.delete('/api/items/delete/:id', apiController.deleteItems);
// SERVER \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
});