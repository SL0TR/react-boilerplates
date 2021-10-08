## Feature Pattern based folder structure

> Example Feature directory layout

    .
    ├── ExampleFeature              # Main folder
    │   │
    │   ├── ContainerExample.js     # A React Container Component example
    │   ├── OtherComponent.js       # Other component for this features
    │   ├── reducer.js              # Seperate reducer for this feature
    │   ├── saga.js                 # Saga generator functions for this feature
    │   ├── styles.js               # Styles only needed for this feature
    │   ├── helper.js               # helper functions only needed for this feature
    │   └── index.js                # Entry export file for the folder. eg: exporting the reudcer, saga and if needed other modules.
