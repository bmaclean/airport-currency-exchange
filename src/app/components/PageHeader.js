import React from 'react';
import {Typography, withStyles} from '@material-ui/core';

function PageHeader(props) {
	const {classes, Icon, title} = props;

	return (
		<div className={classes.headerDiv}>
			{Icon && <Icon className={classes.icon} />}
			<Typography variant="h5">{title}</Typography>
		</div>
	);
}

export default withStyles(theme => ({
	headerDiv: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: '32px'
	},
	icon: {
		marginRight: '10px'
	}
}))(PageHeader);
