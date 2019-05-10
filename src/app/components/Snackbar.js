import React from 'react';
import {Snackbar} from '@material-ui/core';

/**
 * ACXSnackbar is a simple wrapper around MUI's Snackbar to simplify its API.
 */
export default function ACXSnackbar(props) {
	const {close, message, open} = props;

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left'
			}}
			open={open}
			onClose={close}
			autoHideDuration={3000}
			message={<span>{message}</span>}
		/>
	);
}
