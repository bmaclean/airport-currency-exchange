import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
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
	const {classes, logo, theme, polling, title, width} = props;
	const pollingFailed = !polling.pollingSuccessful;
	const isMobile = !isWidthUp('sm', width, theme);
	const logoNode = <img className={classes.logo} src={logo} alt="ACX Logo" />;

	return (
		<AppBar className={classes.appBar} position="sticky" color="primary">
			<Toolbar className={classes.toolbar} disableGutters>
				{isMobile && logoNode}
				{!isMobile && (
					<Typography variant="h5" className={classes.title}>
						{title}
					</Typography>
				)}
				<NavBar isMobile={isMobile} pollingFailed={pollingFailed} />
				{!isMobile && logoNode}
			</Toolbar>
		</AppBar>
	);
}

function mapStateToProps(state) {
	const {polling} = state;
	return {polling};
}

const enhance = compose(
	connect(mapStateToProps),
	withWidth({withTheme: true}),
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
			marginLeft: '15%'
		},
		toolbar: {
			alignItems: 'center',
			display: 'flex',
			height: '100%',
			paddingRight: '48px',
			[theme.breakpoints.down('sm')]: {
				paddingLeft: '16px',
				paddingRight: '16px'
			}
		}
	}))
);

export default enhance(AppHeader);
