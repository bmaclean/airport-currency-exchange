import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {black} from '@material-ui/core/colors';

const THEME = createMuiTheme({
	palette: {
		primary: {
			main: '#ffef06'
		},
		secondary: black
	}
});

/**
 * ACXThemeProvider is a simple wrapper around MuiThemeProvider with a specified theme.
 *
 * Provides the option for user-customized themes in the future.
 */
export default function ACXThemeProvider(props) {
	return <MuiThemeProvider theme={THEME}>{props.children}</MuiThemeProvider>;
}
