const server=require('http');
server.createServer((req,res)=>{
    res.write("Ankit Kumar Maurya");
    res.end();
}).listen(4000);

