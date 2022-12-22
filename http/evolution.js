import http from 'http'
import fs from 'fs'

const sendFile = (path, response) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end('Da hat etwas nicht geklappt')
            return
        }
        const html = data.toString()
        response.writeHead(200)
        response.write(html)
        response.end()
    })
}

const server = http.createServer((req, res) => {
    console.log('Da kommt ein neuer Request', req.method, req.url)

    if (req.url === '/') {
        sendFile('./assets/index.html', res)
    }
    else if (req.url === '/shop') {
        sendFile('./assets/shop.html', res)
    }
    else {
        sendFile('./assets/error.html', res)
    }
})

server.listen(9898, () => {
    console.log('Der Server läuft auf Port 9898');

})