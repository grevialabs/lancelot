var express = require('express')
var app = express()
var getDate = require('../../modules/getdate')
// const { ConsoleTransportOptions } = require('winston/lib/winston/transports')

app.get('/', function(req, res) {
	// render to views/index.ejs template file
	console.log('ayamaa')
	console.log(getDate.getdate())
	// res.response()
	// res.render('front/tailwind', {title: 'My Node.js Application a'})
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
