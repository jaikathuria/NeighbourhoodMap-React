# NeighbourhoodMap (React)
This project is made under Udacity's FrontEnd Nanodegree.This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


### Prerequisite
* [Node](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)

To run the project locally in the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


To build the project for production
### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

To run the `Production` version locally you need to use a local server.
Use the following command to install one:

#### `yarn global add serve`
and then use following command to start the local server

### `serve -s build`
Open [http://localhost:8000](http://localhost:5000) to view it in the browser.


## APIs used in this project
* Google Maps API - To Display Map, Markers and InfoWindow.
* FourSquare API - To Fetch Ratings of the given locations.

## Framework Used
* React


## Reference
* [React Docs](https://reactjs.org/docs/hello-world.html)
* [Full Stack React](https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/)


The app uses the service worker to cache the network requests, and responds with the saved data, if the network goes down.
*Service workers only work with production build, so make sure you build the production version. Also, to test service workers it is important to host your app on a HTTPS server, but for development sake, these also work on localhost so we can use `serve` to test this functionality.*

Once, you have hosted the app using `serve`,
* open [http://localhost:5000](http://localhost:5000)
* Wait for the Webapp to load completely, once loaded you will see a message in the console. `Content is cached for offline use.` ( To open console in Google Chrome on Windows and Linux press Ctrl + Shift + J, On Mac: Cmd + Option + J).
* Now, Emulate network connectivity to offline mode. ([Read More](https://developers.google.com/web/tools/chrome-devtools/network-performance/network-conditions) on how to do it in Google Chrome.
* Now under no internet connection mode, run the app again.

#Note this service worker do not cache the request from external API's ( Caching of Google Map's API is against it's terms and conditions. )




