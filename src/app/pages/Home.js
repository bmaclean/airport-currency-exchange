import React from 'react';
import {withStyles} from '@material-ui/core';
import {CurrencyTable} from '../components';

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
		height: '100vh',
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
