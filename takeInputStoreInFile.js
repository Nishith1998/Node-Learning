const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Take input write in file</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="msg"/><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
        return;
    } else if( req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('inputFile.txt', message, err => {
                res.write('<body>File with content is saved successfully</body>');
                res.end();
            });
        });
        res.write('<html>');
        res.write('<head><title>Take input write in file</title></head>');
        res.write('</html>');
        // res.end();
    }
});

server.listen(3000);