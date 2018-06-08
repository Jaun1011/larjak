# Electron
Currently we only support Linux as operating system for both development and productive use.


## Development
One can run electron in development mode with:

~~~
npm run dev
~~~

This will start the webpack development server and electron from the `./node_modules` directory. Electron will start the `app.js` file in the root of the project.

With the environment variable `NODE_ENV` set to `DEV` electron will not used the packed files, instead it connects to the development server on `localhost:8080`.

## Production build
One can produce a production build with:

~~~
npm run pack
~~~

Webpack will build the project and electron-builder (loaded from global environment) will grab the builded project under `./dist/` into an electron executable under ` ./larjak-linux-x64/larjak`.

### Known Issues

- The build still depends on the project directory, it needs to be startet from the project root with ` ./larjak-linux-x64/larjak`
- Materials Icons are not working
