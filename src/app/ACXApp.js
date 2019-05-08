import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import {AppHeader} from './components';
import {Admin, Home} from './containers';
import {ACXThemeProvider} from './';
import ACXLogo from '../assets/logo.jpg';

/**
 * Top-level component for the Airport Currency Exchange (ACX) App.
 */
export default function ACXApp() {
	return (
		<Provider store={store}>
			<ACXThemeProvider>
				<Router>
					<AppHeader title="Airport Currency Exchange Office" logo={ACXLogo} />
					<Route exact path="/" component={Home} />
					<Route exact path="/admin" component={Admin} />
				</Router>
			</ACXThemeProvider>
		</Provider>
	);
}
