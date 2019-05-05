import React from 'react';
import {
	AppBar,
	IconButton,
	Toolbar,
	Button,
	withStyles,
	withWidth
} from '@material-ui/core';
import { isWidthUp } from '../utils';
import ACXLogo from '../assets/ACX-logo.png';
import ACXMobileLogo from '../assets/ACX-mobile-logo.png';

/**
 * ACXAppHeader is the application header with logo and Home/Menu navigation
 */
function ACXAppHeader(props) {
	const { classes, theme, width } = props;

	return (
		<AppBar className={classes.appBar} position="sticky" color="primary">
			<Toolbar>
				<img
					src={isWidthUp('xs', width, theme) ? ACXLogo : ACXMobileLogo}
					alt="ACX Logo"
				/>
			</Toolbar>
		</AppBar>
	);
}

export default withWidth({ withTheme: true })(
	withStyles(theme => ({
		appBar: {
			height: '120px',
			[theme.breakpoints.down('xs')]: {
				height: '60px'
			}
		},
		appTitle: {}
	}))(ACXAppHeader)
);
