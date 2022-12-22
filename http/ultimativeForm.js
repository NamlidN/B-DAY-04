import http from 'http'
import fs from 'fs'

// Plan
// Get / --> index.html
// Get /<dateiname>.html --> dateiname.html
// ansonsten error.html

const sendFile = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.end('error')
            return
        }
        res.end(data.toString())
    })
}

const server = http.createServer((req, res) => {
    console.log('Ein Request:', req.method, req.url)

    if (req.url === '/') {
        sendFile('./assets/index.html', res)
    }
    else {
        const filePath = './assets' + req.url
        sendFile(filePath, res)
    }
})

server.listen(9898, () => console.log('Server läuft auf Port 9898'))