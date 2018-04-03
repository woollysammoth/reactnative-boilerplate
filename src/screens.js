/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Home from './components/screens/home';
import Test from './components/screens/foo';


export function registerScreens(store, Provider) {
	Navigation.registerComponent('app.Home', () => Home, store, Provider);
	Navigation.registerComponent('app.Test', () => Home, store, Provider);
}