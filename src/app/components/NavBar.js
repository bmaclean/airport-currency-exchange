import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, withStyles} from '@material-ui/core';
import {Error} from '@material-ui/icons';
import {Home, Person} from '@material-ui/icons';

/**
 * NavBar provides a responsive set of tabs for navigation in the app bar.
 */
function NavBar(props) {
	const {classes, isMobile, pollingFailed} = props;
	const homeLabel = pollingFailed ? (
		<span className={classes.errorLabel}>
			Home <Error />
		</span>
	) : (
		'Home'
	);
	let [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<div className={classes.navBarContainer}>
			<Tabs
				className={classes.tabBar}
				indicatorColor="secondary"
				variant="fullWidth"
				value={selectedIndex}
			>
				{isMobile
					? [
							<Tab
								key="mobile-tab-dashboard"
								icon={<Home />}
								component={Link}
								to="/"
								onClick={() => setSelectedIndex(0)}
							/>,
							<Tab
								key="mobile-tab-admin"
								icon={<Person />}
								component={Link}
								to="/admin"
								onClick={() => setSelectedIndex(1)}
							/>
					  ]
					: [
							<Tab
								key="desktop-tab-dashboard"
								aria-label="Dashboard"
								className={classes.tab}
								color="inherit"
								label={homeLabel}
								component={Link}
								to="/"
								onClick={() => setSelectedIndex(0)}
							/>,
							<Tab
								key="desktop-tab-admin"
								aria-label="Admin"
								className={classes.tab}
								color="inherit"
								label="Admin"
								component={Link}
								to="/admin"
								onClick={() => setSelectedIndex(1)}
							/>
					  ]}
			</Tabs>
		</div>
	);
}

export default withStyles(theme => ({
	errorLabel: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	navBarContainer: {
		height: '100%',
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center'
		}
	},
	tab: {
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
			borderRadius: '8px',
			color: theme.palette.secondary.contrastText,
			opacity: 1
		}
	},
	tabBar: {
		margin: 0,
		color: theme.contrastText
	}
}))(NavBar);
