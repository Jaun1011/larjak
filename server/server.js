let express = require('express');
const  bodyParser = require('body-parser');


let app = express();


const { exec } = require('child_process');




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/' ,function(req, res){


    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log(req.body);

    const session = req.body;

    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");


    // gnome-terminal -- ssh -i " + session.keyfile + " " + session.user + "@" + session.host
    exec('gnome-terminal -- ssh -i ' + session.keyfile + ' ' + session.user +'@' + session.host, (err, stdout, stderr) => {

    //exec('gnome-terminal -- sleep 30', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
    res.send('Hello World');
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
