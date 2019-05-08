import React from 'react';
import {Button, withStyles} from '@material-ui/core';
import {Settings} from '@material-ui/icons';
import {AdminSettingRow, PageHeader} from '../components';

/**
 * AdminPage is the top-level presentational component for the Admin page. Receives relevant
 * pieces of state from the Admin container and displays the list of settings and their values.
 */
function AdminPage(props) {
	const {classes, settings, update, updateSetting} = props;
	// initialize key:value tuples for each setting
	const settingsList = Object.entries(settings);

	return (
		<div className={classes.container}>
			<PageHeader Icon={Settings} title="Settings" />
			{settingsList.map(settingKeyValue => {
				const [key, setting] = settingKeyValue;
				return (
					<AdminSettingRow
						key={key}
						// 'key' is not accessible in component props
						settingKey={key}
						className={classes.settingRow}
						label={setting.label}
						type={setting.unit}
						value={setting.value}
						updateSetting={updateSetting}
					/>
				);
			})}
			<div className={classes.buttonRow}>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={update}
				>
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
}))(AdminPage);
