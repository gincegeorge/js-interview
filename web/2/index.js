import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {

    //read html file
    fs.readFile('./src/index.html', 'utf8', (err, file) => {

        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Error reading file');
            return;
        }

        const epochTime = Date.now()
        //add epochTime
        const modifiedHTML = file.replace('{{epochTime}}', epochTime)

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(modifiedHTML);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000')
});