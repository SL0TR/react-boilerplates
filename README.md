<h1 align="center">
  <br>
  <img src="https://i.imgur.com/7nkwu15.png" alt="React Dashboard Boilerplate" width="200">
  <br>
    React Dashboard Boilerplate
  <br>
</h1>

<h4 align="center">A React Dashboard Boilerplate built to Scale</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## Key Features

- :fire: Built with CRA but extendable
  - Comes with the latest CRA scripts and config
  - To extend the CRA webpack config, use `craco.config.js` file. No need to eject
- :chart_with_upwards_trend: Redux and Redux Saga but with less boilerplate
  - Redux Toolkit configured with React Redux and Redux Saga for very little boilerplate
  - React Redux Hooks used for even more clean code
  - React Persist configured for easier localstorage integration
- :blue_heart: Ant Design
  - Configurable Ant theme variables out of the box
  - Localized Ant Design Component for better multilingual support
- :cop: Eslint and Prettier configured with git hooks
  - Eslint and prettier configured together for auto save format and error checks
  - No git commit allowed if errors and warnings are present
- :raised_hands: Global HTTP error and auth handler
  - Custom axios middlewares to handle errors on each request by default. But If needed, custom error handling also can be done with the error details sent by the middleware
  - Auth Token is sent by default if present
  - Progressbar animation added on each HTTP request
- :nail_care: Styled Components
  - Component based styling
  - Custom media queries with JS added as utility with accordance to Ant design breakpoints
- :zap: Codesplitting
  - Native React Lazy loaded pages/components with Suspense
  - Custom loader animation added
- :capital_abcd: Multilingual
  - By default EN and BN json files are added.
  - Easily add new translation in the config folder
- :art: Less and Bootstrap utility classes
  - For margin padding, width and many more utility classes are added and available
  - less loader added
- :rocket: Develepment scope based App config file for deployment
  - App can have different configs, keys for staging, dev or prod and many more
  - Modify and update the `.env` file to store url/key data for different scope
  - Don't forget to add the `.env` file on the `.gitignore`

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Recommended to use [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) for the project.

From your command line:

```bash
# Clone this repository
$ git clone repo-link

# Go into the repository
$ cd react-dashboard-boilerplate

# Install dependencies
$ yarn install or npm i

# Run the app for development scope
$ yarn start

# Run the app for production scope
$ yarn start-prod

# Build the app
$ yarn build

# Serve the app locally
$ yarn build


```

## Credits

This software uses the following open source packages:

- [React](https://reactjs.org/)
- [React Redux](https://react-redux.js.org/)
- [Ant Design](https://ant.design/)
- [Styled Components](https://styled-components.com/)
- [Redux Saga](https://redux-saga.js.org/)
- [React Intl](https://formatjs.io/docs/react-intl/)
- [React Router](https://reactrouter.com/)
- [Axios](https://www.axios.com/)
- And more..

## License

MIT
