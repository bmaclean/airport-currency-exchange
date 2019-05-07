import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	withStyles,
	withWidth
} from '@material-ui/core';
import {isWidthUp} from '../../utils';
import {NavBar} from './';

/**
 * AppHeader is the responsive application header with title logo and Home/Menu navigation
 */
function AppHeader(props) {
	const {classes, logo, theme, title, width} = props;
	const isMobile = !isWidthUp('sm', width, theme);
	const logoNode = <img className={classes.logo} src={logo} alt="ACX Logo" />;

	return (
		<AppBar className={classes.appBar} position="sticky" color="primary">
			<Toolbar className={classes.toolbar}>
				{isMobile && logoNode}
				{!isMobile && (
					<Typography variant="h5" className={classes.title}>
						{title}
					</Typography>
				)}
				<NavBar isMobile={isMobile} />
				{!isMobile && logoNode}
			</Toolbar>
		</AppBar>
	);
}

export default withWidth({withTheme: true})(
	withStyles(theme => ({
		appBar: {
			height: '120px',
			[theme.breakpoints.down('sm')]: {
				height: '60px'
			}
		},
		logo: {
			height: '100px',
			[theme.breakpoints.down('sm')]: {
				height: '50px'
			}
		},
		title: {
			fontFamily: theme.typography.fontFamily,
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
