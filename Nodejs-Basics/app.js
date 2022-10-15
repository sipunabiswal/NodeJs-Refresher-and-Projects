const http =require('http');
const fs = require('fs');
const routes=require('./route');

const server=http.createServer((routes)=>{
    {routes};
});
server.listen(3000)

