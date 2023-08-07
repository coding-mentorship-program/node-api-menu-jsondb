const express = require('express')
const menuData = require('./menu-items.json')
const fs = require('fs') // from node

const app = express()
app.use(express.json()) // this allows us to receive json objects

app.listen('4040', () => console.log('our API is listening on port 4040'))

function handleJsonFileUpdate() {
	const jsonMenuData = JSON.stringify(menuData) // convert to JSON

	// adding to the database
	fs.writeFile('menu-items.json', jsonMenuData, err => console.log(err))
}

/**
 * POST - add
 * PATH: http://localhost:4040/
 * BODY: { "title": "Monster Apple Pie", "description": "Fresh daily baked apple pie with monster super vanilla ice cream"}
 */
app.post('/', (req, res) => {
	menuData.push(req.body) // here lets add a new menu item into our JSON aka DB

	handleJsonFileUpdate()
	res.send(menuData)
})

/**
 * GET - read
 * PATH: http://localhost:4040/
 */
app.get('/', (request, response) => response.send('Hey thank you for accessing my API on port 4040'))

app.get('/menu', (req, res) => {
	res.send(menuData)
})

/**
 * PUT - update
 * BODY: { "title": "Monster Apple Pie", "description": "Fresh daily baked apple pie with monster super vanilla ice cream"}
 * PATH: http://localhost:4040/?title=Apple Pie
 * QUERY: title=Apple Pie
 */
app.put('/', (req, res) => {
	// get the req.query and find item on array with same title
	const itemFound = menuData.find(eachItem => eachItem.title === req.query.title)

	// find index of that found item
	const indexOfItem = menuData.indexOf(itemFound)

	// replacing that item found with the new one from req.body
	menuData.splice(indexOfItem, 1, req.body)

	handleJsonFileUpdate()
	res.send(menuData)
})

/**
 * DELETE
 * PATH: http://localhost:4040/?title=American Hotdog
 */
app.delete('/', (req, res) => {
	const itemFound = menuData.find(eachItem => eachItem.title === req.query.title)

	const indexOfItem = menuData.indexOf(itemFound) //
	menuData.splice(indexOfItem, 1) // find and replace item

	handleJsonFileUpdate()
	res.send(menuData)
})

/**
 * DELETE all
 * PATH: http://localhost:4040/delete-all
 */
app.delete('/delete-all', (req, res) => {
	const jsonMenuData = JSON.stringify([{ empty: true }]) // convert to JSON
	fs.writeFile('menu-items.json', jsonMenuData, err => console.log(err))

	res.send(menuData)
})
