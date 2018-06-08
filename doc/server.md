# Server backend

We use a seperate node project as HTTP REST backend for starting the `gnome-shell` because electron together with webpack does not allow us to spawn a child process.

## Start

~~~
cd server/
npm install
npm start
~~~
