import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {ACXApp, ACXThemeProvider} from './';

/**
 * Root component for the Airport Currency Exchange (ACX) App. Provides redux store and theme context
 * to application subtree.
 */
export default function Root(props) {
	return (
		<Provider store={store}>
			<ACXThemeProvider>
				<ACXApp />
			</ACXThemeProvider>
		</Provider>
	);
}
