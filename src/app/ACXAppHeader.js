import React from 'react';
import {AppBar, Toolbar, withStyles, withWidth} from '@material-ui/core';
import {isWidthUp} from '../utils';
import {NavBar} from './';
import ACXLogo from '../assets/ACX-logo.png';
import ACXMobileLogo from '../assets/ACX-mobile-logo.png';

/**
 * ACXAppHeader is the application header with logo and Home/Menu navigation
 */
function ACXAppHeader(props) {
	const {classes, theme, width} = props;
	const isMobile = !isWidthUp('xs', width, theme);

	return (
		<AppBar className={classes.appBar} position="sticky" color="primary">
			<Toolbar>
				<img src={isMobile ? ACXMobileLogo : ACXLogo} alt="ACX Logo" />
				<NavBar isMobile={isMobile} />
			</Toolbar>
		</AppBar>
	);
}

export default withWidth({withTheme: true})(
	withStyles(theme => ({
		appBar: {
			height: '120px',
			[theme.breakpoints.down('xs')]: {
				height: '60px'
			}
		}
	}))(ACXAppHeader)
);
