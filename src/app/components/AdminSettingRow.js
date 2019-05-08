import React from 'react';
import {InputAdornment, TextField, withStyles} from '@material-ui/core';

/**
 * AdminSettingRow is a row containing an admin setting label and corresponding value input.
 * The AdminSettingRow API accepts a type that informs units and validation.
 *
 * Provided type is one of: dollars, percent, seconds.
 */
function AdminSettingRow(props) {
	const {classes, label, type, settingKey, value, updateSetting} = props;
	const unitSymbol = {
		dollars: '$',
		percent: '%',
		seconds: 's'
	};
	const inputType = {
		dollars: 'number',
		percent: 'number',
		seconds: 'number'
	};

	return (
		<div className={classes.settingRow}>
			<span>{label}</span>
			<TextField
				className={classes.input}
				type={inputType[type] || undefined}
				variant="outlined"
				value={value}
				onChange={e => updateSetting(settingKey, e.target.value)}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">{unitSymbol[type]}</InputAdornment>
					)
				}}
			/>
		</div>
	);
}

export default withStyles(theme => ({
	input: {
		width: '124px'
	},
	settingRow: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '8px',
		marginBottom: '8px',
		minWidth: '400px',
		width: '30%'
	}
}))(AdminSettingRow);
