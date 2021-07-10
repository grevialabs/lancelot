var express = require('express')
var app = express()

app.get('/', function(req, res) {
	// render to views/index.ejs template file
	res.render('index', {title: 'My Node.js Application a'})
}) 

app.get('/tailwind', function(req, res) {
	// render to views/index.ejs template file
	res.render('front/tailwind', {title: 'Controller index from tailwind'})
})

app.get('/login', function(req, res) {
	// render to views/index.ejs template file
	res.render('login/login', {title: 'this is from front about'})
})

app.post('/login', function(req, res) {
	// render to views/index.ejs template file
	var user = req.body.username;
	var password = req.body.password;
	var page = 'user tidak valid';
	if (user && password) {

		if (user == 'ayam' && password == 'ayam') {
			page = 'user ayam benar';
		} else {
			page = 'user ayam salah';
			
		}
	}
	res.render('login/login', {title: page})
})

/** 
 * We assign app object to module.exports
 * 
 * module.exports exposes the app object as a module
 * 
 * module.exports should be used to return the object 
 * when this file is required in another module like app.js
 */ 
module.exports = app;
