import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, withStyles} from '@material-ui/core';
import {Dashboard, Person} from '@material-ui/icons';

/**
 * NavBar provides a responsive set of tabs for navigation in the app bar.
 */
function NavBar(props) {
	const {classes, isMobile} = props;

	return (
		<div className={classes.navBarContainer}>
			<Tabs
				className={classes.tabBar}
				indicatorColor="secondary"
				variant="fullWidth"
			>
				{isMobile ? (
					[
						<Tab
							key="mobile-tab-dashboard"
							icon={<Dashboard />}
							component={Link}
							to="/"
						/>,
						<Tab
							key="mobile-tab-admin"
							icon={<Person />}
							component={Link}
							to="/admin"
						/>
					]
				) : (
					<>
						<Tab
							aria-label="Dashboard"
							className={classes.tab}
							color="inherit"
							label="Dashboard"
							component={Link}
							to="/"
						/>
						<Tab
							aria-label="Admin"
							className={classes.tab}
							color="inherit"
							label="Admin"
							component={Link}
							to="/admin"
						/>
					</>
				)}
			</Tabs>
		</div>
	);
}

export default withStyles(theme => ({
	navBarContainer: {
		height: '100%',
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		[theme.breakpoints.down('xs')]: {
			alignItems: 'center'
		}
	},
	tab: {
		width: '150px'
	},
	tabBar: {
		color: theme.contrastText
	}
}))(NavBar);
