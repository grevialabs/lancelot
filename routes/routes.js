// const routes = require('express').Router();

var express = require('express')
// var app = express()

var routes = express()

/**
 * import routes/index.js
 * import routes/users.js
 */ 
var index = require('./index')
var users = require('./users')
var api = require('./api')
var login = require('./login')
// var api_product_get = require('./api/product_get')
var api_product_list_get = require('./api/product_list_get')
var tailwind = require('./front/tailwind')
const { route } = require('./index')


routes.use('/', index)
routes.use('/users', users)
routes.use('/tailwind', tailwind)
routes.use('/login', login)

// ---------------------------
// Prefix api/
route_prefix = '/api'
routes.use(route_prefix, api)	
routes.use(route_prefix, api_product_list_get)
// app.use('/api', api_product_get)
// ---------------------------

// routes.use('/tailwind',tailwind);

// var front_about = require('./front/about')
// ---------------------------
// Prefix front/
// route_prefix = '/front'
// routes.use(route_prefix, front_about)
// ---------------------------

module.exports = routes