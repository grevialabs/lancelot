var express = require('express')
var app = express()

// var product_get = require('./routes/api/product_get')

// app.get('/', function(req, res, next) {
	// req.getConnection(function(error, conn) {
		// // conn.query('SELECT * FROM product ORDER BY product_id DESC',function(err, rows, fields) {
		// conn.query('SELECT * FROM product ORDER BY product_id DESC LIMIT 1',function(err, rows, fields) {
			// // if(err) throw err
			// if (err) {
				// // console.log(err)
				// req.flash('error', err)
				// res.render('api/index', {
					// // title: 'Api Product List', 
					// data: ''
				// })
			// } else {
				// console.log(rows)
				// rows = JSON.stringify(rows)
				// // render to views/user/list.ejs template file
				// res.render('api/index', {
					// // title: 'API product List', 
					// data: rows
				// })
			// }
		// })
	// })
// })

// SHOW LIST OF USERS
// access api/product
app.get('/product', function(req, res, next) {
	req.getConnection(function(error, conn) {
		sql = ''
		sql+= 'SELECT * '
		sql+= 'FROM product '
		sql+= 'ORDER BY product_id DESC'
		conn.query(sql,function(err, rows, fields) {
			// if(err) throw err
			if (err) {
				// console.log(err)
				req.flash('error', err)
				res.render('api/list', {
					title: 'Api Product List', 
					data: ''
				})
			} else {
				console.log(rows)
				// render to views/user/list.ejs template file
				res.render('api/list', {
					title: 'API product List', 
					data: rows
				})
			}
		})
	})
})

// SHOW LIST OF PRODUCTS JSON
// access api/product
app.get('/product_json', function(req, res, next) {
	req.getConnection(function(error, conn) {
		sql = ''
		response = '';
		
		sql+= 'SELECT * '
		sql+= 'FROM product '
		sql+= 'ORDER BY product_id DESC'
		conn.query(sql,function(err, rows, fields) {
			
			rows = JSON.stringify(rows)
			// console.log(rows)
			// render to views/user/list.ejs template file
			res.render('api/index', {
				title: 'API product List', 
				data: rows
			})
			
		})
	})
})


// app.get('/api/product', function(req, res, next) {
	// req.getConnection(function(error, conn) {
		// rows = 'yamete'
		// res.render('api/index', {
			// title: 'API product List', 
			// data: rows
		// })
		
		// conn.query('SELECT * FROM product ORDER BY product_id DESC',function(err, rows, fields) {
			// if(err) throw err
			// if (err) {
				// console.log(err)
				// req.flash('error', err)
				// res.render('api/list', {
					// title: 'Api Product List', 
					// data: ''
				// })
			// } else {
				// console.log(rows)
				// render to views/user/list.ejs template file
				// res.render('api/list', {
					// title: 'API product List', 
					// data: rows
				// })
			// }
		// })
	// })
// })

module.exports = app