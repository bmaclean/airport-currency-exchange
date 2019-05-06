import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ACXAppHeader, ACXThemeProvider, Admin, Dashboard} from './';

/**
 * Top-level component for the Airport Currency Exchange (ACX) App.
 */
export default function ACXApp() {
	return (
		<ACXThemeProvider>
			<Router>
				<ACXAppHeader />
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/admin" component={Admin} />
			</Router>
		</ACXThemeProvider>
	);
}
