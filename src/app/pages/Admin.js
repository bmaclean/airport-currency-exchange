import React from 'react';
import {Button, withStyles} from '@material-ui/core';
import {Settings} from '@material-ui/icons';
import {AdminSettingRow, PageHeader} from '../components';

function Admin(props) {
	const {classes} = props;
	// TODO: placeholder
	const settings = [
		{label: 'Refresh currency exchange rates every', unit: 'seconds'},
		{label: 'Commission', unit: 'percent'},
		{label: 'Surcharge', unit: 'dollars'},
		{label: 'Minimum Commission', unit: 'dollars'},
		{label: 'Buy/Sell rate margin', unit: 'percent'}
	];

	return (
		<div className={classes.container}>
			<PageHeader Icon={Settings} title="Settings" />
			{settings.map(setting => (
				<AdminSettingRow key={setting.label} className={classes.settingRow} label={setting.label} type={setting.unit} />
			))}
			<div className={classes.buttonRow}>
				<Button variant="contained" color="primary" className={classes.button}>
					Update
				</Button>
			</div>
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
	},
	buttonRow: {
		display: 'flex',
		justifyContent: 'flex-end',
		marginTop: '8px',
		minWidth: '400px',
		width: '30%'
	}
}))(Admin);
