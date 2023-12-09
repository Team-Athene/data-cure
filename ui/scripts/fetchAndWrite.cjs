const http = require('node:http')
const fs = require('node:fs')
const { promisify } = require('node:util')

const writeFile = promisify(fs.writeFile)
const url = 'http://localhost:3000/api-json'

http.get(url, (res) => {
	let body = ''

	res.on('data', (chunk) => {
		body += chunk
	})

	res.on('end', async () => {
		try {
			const fetchedJson = JSON.parse(body)

			await writeFile('swagger.json', JSON.stringify(fetchedJson, null, 2))
			console.log('Successfully wrote Swagger JSON to swagger.json')
		} catch (error) {
			console.error('Error in parsing or writing JSON', error)
		}
	})
}).on('error', (error) => {
	console.error('Got an error:', error)
})
