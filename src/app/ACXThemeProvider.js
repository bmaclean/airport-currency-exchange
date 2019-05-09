import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

// retrieved from provided logo and sample website
const ACX_YELLOW = '#ffef06';
const BLACK = '#000';
const WHITE = '#FFF';

// TODO: dark mode; toggle in admin settings
const THEME = createMuiTheme({
	palette: {
		primary: {
			main: ACX_YELLOW,
			dark: BLACK,
			constrastText: BLACK
		},
		secondary: {
			main: BLACK,
			contrastText: WHITE
		}
	},
	typography: {
		fontFamily: ['Montserrat', 'sans-serif'].join(',')
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
