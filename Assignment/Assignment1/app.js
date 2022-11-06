const http =require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method= req.method;
    const users=[];
    users.push('user1');
    users.push('user2');
    users.push('user3');
    users.push('user4');
    users.push('user5');

    if (url==='/') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Users directory</title></head>');
        res.write('<body><form action="/create-user" method="POST">' 
        +'<div> <input type="text"/><button type="submit">Create</button> <div>'
        +'</form></body>');
        res.write('</html>');
        return res.end();     
    } 
    if(url==='/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Users directory</title></head>');
        res.write('<body><p><ul> <li>User 1</li> <li>User2 </li> <li>user 3</li> <li>user 4</li> <li>user 5</li></ul></p></body>');
        res.write('</html>');
        return res.end();
    }
   
    if(url==='/create-user' && method==='POST'){
        debugger;
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end',()=>{
            const parsebody=Buffer.concat(body).toString();
            const message=parsebody.split('=')[1];
            console.log(parsebody);
            console.log(message);           
        });
        

    }
});
server.listen(3000)

