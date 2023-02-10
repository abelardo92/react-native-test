/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import TestClass2 from './TestClass2';
import PromiseTest from './PromiseTest';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PromiseTest);
