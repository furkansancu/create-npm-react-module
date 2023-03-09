### How to get started ?
There are two main components:
- `preview/index.js`:
    This is your testing environment changes applied to this component will not be applied to your component that is going to be published. This component only meant to be customized in your 
<br>
- `src/index.js`:
    This is your main component whatever you will export from this file will be your package.

### Commands
```sh
npm run start
```
This will start your react web server preview app. You can monitor your component by running this command.
```sh
npm run build
```
This will distribute your component in `dist/` folder, always make sure to do this 

### How can my package be imported ?
Your package can be import from `dist/index.js` file with code below:
```sh
import { MyComponent } from 'my-package';
```
