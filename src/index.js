import express from 'express';
const server = express();


server.get('/', (req, res) => {
    debugger;
    res.send('hello world 3');
});

server.listen(8080, (err) => {
    if(!err) {
        console.log('server is start at port 8080');
    }
});
