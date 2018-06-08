let express = require('express');
let app = express();


const { spawn } = require('child_process');
const ls = spawn('ls', ['-la', './']);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.get('/', function (req, res) {

    console.log("in function");
    ls.stdout.on('data', (data) => {
        console.log("");
        console.log(`stdout: ${data}`);
    });


    res.send('Hello World');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
