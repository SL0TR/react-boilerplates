<h1 align="center">
  <br>
  <img src="https://i.imgur.com/7nkwu15.png" alt="React Boilerplates" width="200">
  <br>
    React Dashboard Boilerplates for every need
  <br>
</h1>


## Types of boilerplatye

- :shield: Solid React


- :crossed_swords: Solid React Dashboard


- :zap: Light React (Upcoming)



## Application structure preview

> The directory layouts of the solid boilerplates

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
- [Ant Design](https://ant.design/)
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
