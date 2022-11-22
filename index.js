/**
 * @format
 */

import {AppRegistry} from 'react-native';
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
import App from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
