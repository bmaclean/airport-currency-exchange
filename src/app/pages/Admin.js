import React from 'react';
import {PageHeader} from '../components';
import {withStyles} from '@material-ui/core';
import {Settings} from '@material-ui/icons';

function Admin(props) {
	const {classes} = props;

	return (
		<div className={classes.container}>
			<PageHeader Icon={Settings} title="Settings" />
		</div>
	);
}

export default withStyles(theme => ({
	container: {
		height: '100%',
		display: 'flex',
		marginLeft: '15%',
		marginTop: '32px',
		flexDirection: 'column',
		fontFamily: theme.typography.fontFamily,
		[theme.breakpoints.down('sm')]: {
			marginLeft: '16px'
		}
	}
}))(Admin);
