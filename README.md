# Getting Started with Create React App

resources: 
- https://react.dev/blog/2023/03/16/introducing-react-dev
- https://create-react-app.dev/docs/getting-started
- https://dev.to/ruppysuppy/create-react-app-from-scratch-like-a-pro-de0

Follow the next steps to create a simple react app

## Create the empty app from scratch

```bash
# uninstall previous versions
npm uninstall -g create-react-app
# or 
yarn global remove create-react-app

# install latest versions
npm install -g create-react-app

# create react app
npx create-react-app your-project-name

# Creating a new React app in /Users/projects/your-project-name

# Installing packages. This might take a couple of minutes.
# Installing react, react-dom, and react-scripts with cra-template...
```
Instead of installing all the react dependencies one by one, you can use create a simple react project using the basic 
archetype `create-react-app`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder structure

For the project to build, these files must exist with exact filenames:

- public/index.html is the page template;
- src/index.js is the JavaScript entry point.

You can delete or rename the other files of the project but not these.

## Check the source files

Check `MyButton` to see how react works

[MyButton.js](src%2Fcomponents%2Fbutton%2FMyButton.js)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Close the open ports
```bash
lsof -i:3000
kill -9 pid
```
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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
