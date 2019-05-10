import React from 'react';
import {withStyles} from '@material-ui/core';
import {toDecimalPlace} from '../helpers';

/**
 * CurrencyTransactionBody is the body of the transaction modal that displays
 * the rate, subtotal, commission, and total transaction cost.
 */
function CurrencyTransactionBody(props) {
	const {classes, commission, subtotal, rate, total} = props;

	return (
		<div className={classes.body}>
			<div className={classes.row}>
				<span>Exchange Rate</span>
				<span>{toDecimalPlace(rate, 4)}</span>
			</div>
			<div className={classes.row}>
				<span>Subtotal</span>
				<span>{toDecimalPlace(subtotal, 2)}</span>
			</div>
			<div className={classes.row}>
				<span>Commission</span>
				<span>{toDecimalPlace(commission, 2)}</span>
			</div>
			<hr className={classes.lineBreak} />
			<div className={classes.row}>
				<span>Total</span>
				<span>{toDecimalPlace(total, 2)}</span>
			</div>
		</div>
	);
}

export default withStyles(theme => ({
	body: {
		fontFamily: theme.typography.fontFamily,
		marginTop: '16px'
	},
	lineBreak: {
		marginTop: '16px',
		marginBottom: '16px'
	},
	row: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '8px',
		width: '400px',
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	}
}))(CurrencyTransactionBody);
