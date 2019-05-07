import React from 'react';
import {withStyles} from '@material-ui/core';
import {CurrencyTable} from '../components';

/**
 * Home Page is the main dashboard from which the user can interact with the currency table
 * and see currency update information and remaining balance.
 */
function Home(props) {
	const {classes} = props;
	// TODO: placeholders
	const lastUpdated = 'XX/XX/XXXX';
	const amountRemaining = 'XXX.XX';
	const baseCurrency = 'USD';
	const baseCurrencySymbol = '$';

	return (
		<div className={classes.container}>
			<span>
				Exchange rates shown as per {lastUpdated}. You have {baseCurrencySymbol}
				{amountRemaining} {baseCurrency} left.
			</span>
			<CurrencyTable className={classes.table} />
		</div>
	);
}

export default withStyles(theme => ({
	container: {
		// TODO: fix height
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		fontFamily: theme.typography.fontFamily,
		marginTop: '32px'
	},
	table: {
		marginTop: '32px',
		width: '60%'
	}
}))(Home);
