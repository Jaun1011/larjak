// import 'child_process';
import * as child_process from 'child_process';


export default {
    run: function (session) {
        // var child = require("child_process")
        // const process = require('child_process');
        console.log(cmd)
        console.log("starting gnome-shell")
        const spawn = require('child_process').spawn;
        var cmd = "gnome-terminal -- ssh -i " + session.keyfile + " " + session.user + "@" + session.host
        const pid = spawn(cmd);

        // Handle normal output
        bat.stdout.on('data', (data) => {
            // As said before, convert the Uint8Array to a readable string.
            var str = String.fromCharCode.apply(null, data);
            console.info(str);
        });

        // Handle error output
        bat.stderr.on('data', (data) => {
            // As said before, convert the Uint8Array to a readable string.
            var str = String.fromCharCode.apply(null, data);
            console.error(str);
        });






        // child.execSync(cmd)
        // var gnomeshell = child_process.spawn(cmd)
        // gnomeshell.on('close', function (code) {
        //   console.log("closed gnome-shell")
        // });
    },
}






//
// function appendToDroidOutput(msg) { getDroidOutput().value += msg; };
// function setStatus(msg)           { getStatus().innerHTML = msg; };
//
// function backgroundProcess() {
//     const process = require('child_process');   // The power of Node.JS
//
//     // var ls = process.spawn('ls', ['-l']);
//     var ls = process.spawn('./test.sh');
//
//     ls.stdout.on('data', function (data) {
//       // console.log('stdout: <' + data+'> ');
//           // appendToDroidOutput(data);
//       appendToDroidOutput('stdout: <' + data+'> \n');
//     });
//
//     ls.stderr.on('data', function (data) {
//       console.log('stderr: ' + data);
//     });
//
//     ls.on('close', function (code) {
//       // console.log('child process exited with code ' + code);
//           if (code == 0)
//          setStatus('child process complete.');
//           else
//          setStatus('child process exited with code ' + code);
//           getDroidOutput().style.background = "DarkGray";
//     });
// };
