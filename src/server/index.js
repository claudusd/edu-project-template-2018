const express = require('express')
const app = express()

const api = require('./api_episodes.js')
const config = require('./config.js')

app.get('/', (req, res) => res.send('Hello world !'))
app.listen(config, () => console.log('Example app listening on port 3000!'))

app.use('/api/episodes', api)