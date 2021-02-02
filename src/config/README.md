## Custom App config based on development scope/phase

> Example directory layout

    .
    ├── app                   # App config directory
    │   │
    │   ├── default.js          # The default config object .
    │   ├── development.js      # Config object for development. set by `cross-env REACT_APP_DEPLOY_SCOPE=development`
    │   ├── production.js       # Config object for development. set by `cross-env REACT_APP_DEPLOY_SCOPE=prdocution`
    │   └── index.js            # Entry export file for the folder
    │
    ├── theme                 # Theme object for Styled components theme provider
    ├── translation           # Translations
    │   │
    │   ├── entries             # JS object config for each locale
    │   ├── locales             # Json files for each locale containing keys and their translation
    │   └── production.js
