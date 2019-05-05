import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {blueGrey, yellow} from '@material-ui/core/colors';

const THEME = createMuiTheme({
	palette: {
		primary: {
			light: blueGrey['800'],
			main: blueGrey['900'],
			dark: blueGrey['900'],
			contrastText: blueGrey['100'],
		},
		secondary: yellow
	}
});

export default function ACXThemeProvider(props) {
	return <MuiThemeProvider theme={THEME}>{props.children}</MuiThemeProvider>;
}
 