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
  <a href="#how-to-use">How To Use</a> •
  <a href="#application-structure">Application Structure</a> •
  <a href="#license">License</a>
</p>

## Key Features

- :fire: Built with CRA but extendable
  - Comes with the latest CRA scripts and config
  - To extend the CRA webpack config, use `craco.config.js` file. No need to eject
- :chart_with_upwards_trend: Redux and Redux Saga but with less boilerplate. See <a href="/src/store">store</a>


- :cop: Eslint and Prettier configured with git hooks

  - Eslint and prettier configured together for auto save format and error checks
  - No git commit allowed if errors and warnings are present

- :raised_hands: Global HTTP error and auth handler. See <a href="/src/services">services</a>

- :nail_care: Styled Components and more goodies on <a href="/src/styles">styles</a>

- :zap: Codesplitting

  - Native React Lazy loaded pages/components with Suspense
  - Custom loader animation added

- :capital_abcd: Multilingual. See <a href="/src/config">config</a>

- :art: Less and Bootstrap utility classes. See <a href="/src/styles">styles</a>

- :rocket: Develepment scope based App config file for deployment. See <a href="/src/config">config</a>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Recommended to use [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) for the project.

From your command line:

```bash
# Clone this repository
$ git clone repo-link

# Go into the repository
$ cd solid-react

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

## Application structure

> The directory layout of this boilerplate

    .
    ├── .vscode                 # Vscode config, for autoformat on save.
    ├── build                   # After running the build command the build files get put here
    ├── node_modules            # NPM dependency folder
    ├── public                  # Reacts public folder for the html and static assets
    ├── src                     # Source directory for the React Application
    ├── src                     # Source directory for the React Application
    │   │
    │   ├── api                   # API async functions folder.
    │   ├── assets                # Static assets folder for the global scope. Example: images, icons, fonts etc.
    │   ├── components            # Typical React component folder but only for global components.
    │   ├── config                # App config (More details inside the folder)
    │   ├── features              # Features pattern folder for Application features (More details inside the folder)
    │   ├── lib                   # Global helper functions and custom hooks folder
    │   ├── pages                 # Pages component folder
    │   ├── router                # Application navigation/routing config (More details inside the folder)
    │   ├── services              # Folder for services like custom axios instance, analytics etc.
    │   ├── store                 # Application Redux store
    │   ├── styles                # Custom SC components, CSS, less utilities
    │   └── App.js                # Entry component for the React App.
    │
    ├── craco.config.js         # Extend Webpack config (example: Ant Design theme variable modifying)
    ├── jsconfig.json           # Adjust file paths to use absolute file path for React
    ├── package.json            # The NPM config file for all the packages installed and scripts and more
    ├── .env                    # Store API Url, Secret API keys etc
    ├── .eslintrc               # Configure Eslint
    ├── .eslinignore            # ignore certain files for Eslint
    ├── .gitignore              # ignore certain files for git (example: .env)
    ├── .prettierrc             # Configure prettier (example: .env)
    └── .prettierignore         # ignore certain files for Prettier

## Credits

This software uses the following open source packages:

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [React Redux](https://react-redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [redux-logger](https://github.com/LogRocket/redux-logger)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [React Intl](https://formatjs.io/docs/react-intl/)
- [React Router](https://reactrouter.com/)
- [@ant-design/icons](https://github.com/ant-design/ant-design-icons)
- [Axios](https://github.com/axios/axios)
- [Craco](https://github.com/gsoft-inc/craco)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
- [polished](https://polished.js.org/docs/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [husky](https://typicode.github.io/husky/#/)
- And more..

## License

MIT
