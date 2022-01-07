const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our page')
    }if(req.url === '/about'){
        res.end('Its us')
    }else{
        res.end(`
        <h1>Ooops!</h1>
        <p>Nao deu p achar a pagina que voce procura</p>`)
    }
})

server.listen(3000)