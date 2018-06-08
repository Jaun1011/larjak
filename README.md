# larjak

> SSH Session Manager

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Project details

All the project planning details can be found here [doc/README.md](doc/README.md).

## Local Storage

We do use local Storage for persistance, the documentation can be found here: [doc/local-storage.md](doc/local-storage.md).

## Electron

The documentation regarding Electron can be found here: [doc/electron.md](doc/electron.md).

## Server backend

Electron and webpack do not allow us to spawn a child process, as workaround we use a backend service for spawning the `gnome-shell`, documentatoin can be found here [doc/server.md](doc/server.md)

## Vue.js

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
