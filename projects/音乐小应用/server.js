var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){
  try{
    if(req.url === '/'){
      console.log(req.url)
      var fileContent = fs.readFileSync(__dirname + req.url + 'index.html')
    }else{
      var fileContent = fs.readFileSync(__dirname + req.url)
    }
    res.writeHead(200, 'OK')
    res.write(fileContent)
  }catch(e){
    res.writeHead(404, 'not found')
    res.write('404 Not Found')
  }
  res.end()
})
console.log('visit http://localhost:8080')
server.listen(8080)