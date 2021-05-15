## when you write anything and push 

We are newbies. The nitty-grittiness required.
If you just did something based on what you just learn by tutorial,
you may assume no one here knows how to do it.
If you leave that wihout any explaination it will only cause delay by:
    1. Another person waste time for just a simple link or simple comment missing from your code.
    2. Another person gives up to figure out what that is and do alternatively, concurrently (While you are doing the same job differently).
If there is nothing we can see in the code, there should be something once to go 
to the definition of the variable, function, or component.

## style guide

If your tutorial uses a weird style (ex. var name), it's good to hesitate to do
like so. Prefer docs over tutorials in terms of style.

## enviroment

The file '.env' contains the fireabse api key and other variables for firebase. Don't set ignore for all project member but keep the repo private.

The firebase variables are dealt like wise.
    env file name: '.env'
    https://amanhimself.dev/blog/firebase-config-in-a-react-app/
    https://create-react-app.dev/docs/adding-custom-environment-variables/

Some version issues from old reference projects
    You could see in some tuorials that import.
        import * as firebase from 'firebase';
        This is 2019ish. 2020ish update allows.
        import firebase from 'firebase/app';
    'ServiceWorker' seems deprecated.
        https://bit.ly/CRA-PWA

The App initialization takes place in src/firebase.js
    firebase.initializeApp(firebaseConfig);

Most accurate way to search about packages
    https://www.npmjs.com/

## what's particularly used and decisions

'styled-components' instead of Bootstrap.
    This gives the front-end team to 'use' CSS (they need credit).
    https://styled-components.com/docs/basics#motivation
Convert css to styled-component
    https://scotch.io/tutorials/converting-css-in-react-to-styled-component

How I determined what to make.
    https://reactnative.dev/docs/components-and-apis



====================================================== Default README.md

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
