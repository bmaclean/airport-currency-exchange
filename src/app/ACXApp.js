import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AppHeader} from './components';
import {Admin, Home} from './pages';
import {ACXThemeProvider} from './';

/**
 * Top-level component for the Airport Currency Exchange (ACX) App.
 */
export default function ACXApp() {
	return (
		<ACXThemeProvider>
			<Router>
				<AppHeader />
				<Route exact path="/" component={Home} />
				<Route exact path="/admin" component={Admin} />
			</Router>
		</ACXThemeProvider>
	);
}
