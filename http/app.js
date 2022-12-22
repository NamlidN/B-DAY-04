import http from 'http'

const requestHandler = (req, res) => {
    console.log('Da kommt ein neuer Request', req.method, req.url);
    if (req.url === '/') {
        res.end('Hey Oma, schau mal mein Server <3')
    }
    else if (req.url === '/bank') {
        res.end('Sie sind nicht Kreditwürdig')
    }
    else {
        res.writeHead(404)
        res.end('Site not found')
    }

}

const server = http.createServer(requestHandler)

server.listen(9898, () => console.log('Der Server läuft auf port: 9898'))