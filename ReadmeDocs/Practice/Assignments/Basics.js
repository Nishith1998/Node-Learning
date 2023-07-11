const http = require('http');
const dummyUsers = ['alice', 'bob'];

const server = http.createServer((req, res) => {
    const [url, method] = [req.url, req.method];

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Basics Assignment</title></head>');
        res.write('<body>');
        res.write('<h1>Hi There from Node.js !!</h1>');
        res.write(`<form action="/create-user" method="POST"><input type="text" name="msg"><button type="submit">Add User</button></form>`);
        res.write(`<a href="/users">Show users</a>`)
        res.write('</body>')
        res.write('</html>');
        return res.end();
    } else if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Basics Assignment</title></head>');
        res.write('<body>');
        res.write(dummyUsers.toString());
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/create-user' && method === 'POST') {
        res.statusCode = '302';
        res.setHeader('Location', '/');

        res.write('<html>');
        res.write('<head><title>Basics Assignment</title></head>');
        res.write('<body>');
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const newUser = Buffer.concat(body).toString().split('=')[1];
            dummyUsers.push(newUser);
            res.end();
        })

    }
});

server.listen(3000);