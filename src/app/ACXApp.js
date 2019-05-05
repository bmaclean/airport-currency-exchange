import React from 'react';
import {ACXAppHeader, ACXThemeProvider} from './';

/**
 * Top-level component for the Airport Currency Exchange (ACX) App.
 */
export default function ACXApp() {
	return (
		<ACXThemeProvider>
			<ACXAppHeader />
		</ACXThemeProvider>
	);
}