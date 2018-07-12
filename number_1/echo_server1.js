var http = require('http');

var hostname = 'localhost';

var port = 3000;

var server = http.createServer(function(req,res){
    
    res.writeHead(200, ('content-Type : text/html'));
    
    req.on('data',function(message){
        
       res.write(message); 
    });
    
    req.on('end',function(){
        
       res.end(); 
    });
    
});

server.listen(port,hostname,function(){
    
   console.log('server is running at http://localhost:3000'); 
});