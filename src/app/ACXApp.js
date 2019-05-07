import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {AppHeader} from './components';
import {Admin, Home} from './pages';
import {ACXThemeProvider} from './';
import ACXLogo from '../assets/logo.jpg';

/**
 * Top-level component for the Airport Currency Exchange (ACX) App.
 */
export default function ACXApp() {
	return (
		<ACXThemeProvider>
			<Router>
				<AppHeader title="Airport Currency Exchange Office" logo={ACXLogo} />
				<Route exact path="/" component={Home} />
				<Route exact path="/admin" component={Admin} />
			</Router>
		</ACXThemeProvider>
	);
}
