const express = require('express')
const htmlDir = './html/'
const app = express()

// Set content directories
app.use(express.static(__dirname + '/dist'))

app.get('/', function (request, response) {
  response.sendFile(htmlDir + 'index.html')
})

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Listening on ' + port)
})
