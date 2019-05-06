import React from 'react';
import {AppBar, Toolbar, Typography, withStyles, withWidth} from '@material-ui/core';
import {isWidthUp} from '../../utils';
import {NavBar} from './';
import ACXLogo from '../../assets/logo.jpg';

/**
 * AppHeader is the application header with logo and Home/Menu navigation
 */
function AppHeader(props) {
	const {classes, theme, width} = props;
	const isMobile = !isWidthUp('xs', width, theme);
	const logo = <img className={classes.logo} src={ACXLogo} alt="ACX Logo" />;

	return (
		<AppBar className={classes.appBar} position="sticky" color="primary">
			<Toolbar className={classes.toolbar}>
				{isMobile && logo}
				{!isMobile && (
					<Typography variant="h5" className={classes.title}>
						Airport Currency Exchange Office
					</Typography>
				)}
				<NavBar isMobile={isMobile} />
				{!isMobile && logo}
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
		},
		logo: {
			height: '100px',
			[theme.breakpoints.down('xs')]: {
				height: '60px'
			}
		},
		title: {
			fontFamily: 'Montserrat, sans-serif',
			margin: 'auto',
			marginLeft: '10%'
		},
		toolbar: {
			height: '100%',
			display: 'flex',
			alignItems: 'center'
		}
	}))(AppHeader)
);
