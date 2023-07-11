// let httP = require('http');

// const server = httP.createServer((req, res) => {
//     console.log("method: ", req.method, "URL: ", req.url);
//     res.write('<html>');
//     res.write('<head><title>Node js app</title></head>');

    // if(req.url === '/') {
    //     res.write('<body><h1>Hi There from Node.js !!</h1></body>');
    //     return res.end();
    // }
    // res.write(`<form action="/message" method="POST"><input type="text"><button type="submit" name="msg">Send</button></form>`);
    // res.write('</html>');
//     res.end();
// })

// server.listen(3000);

let fs = require('fs');

console.log("start");

const readStream = fs.createReadStream('./inputFile.txt');
readStream.on('data', (chunk) => {
    console.log("fileRead: ",chunk.toString());
    setImmediate(() => {
        console.log("setImmediate2");
    });
    fs.readFile('./inputFile.txt', (err, dataBuffer) => {
        console.log("readFile", dataBuffer)
    })
    setTimeout(() => {
        console.log("setTimeout2");
    }, 0);
})

setImmediate(() => {
    console.log("setImmediate");
});

setTimeout(() => {
    console.log("setTimeout");
}, 0)
console.log("end");