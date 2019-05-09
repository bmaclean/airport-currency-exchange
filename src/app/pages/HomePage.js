import React, {useState} from 'react';
import {withStyles} from '@material-ui/core';
import {CurrencyTable, CurrencyTransactionModal} from '../components';

/**
 * HomePage is the main dashboard from which the user can interact with the currency table
 * and see currency update information and remaining balance.
 */
function HomePage(props) {
	const {baseCurrency, classes, currencies, lastUpdated} = props;
	const {balance, code, symbol} = baseCurrency;

	let [modalOpen, setModalOpen] = useState(false);
	let [transactionType, setTransactionType] = useState('');
	let [currency, setCurrency] = useState('');

	const closeTrader = () => {
		setModalOpen(false);
	};

	const openTrader = (transactionType, currency) => {
		setModalOpen(true);
		setTransactionType(transactionType);
		setCurrency(currency);
	};

	return (
		<div className={classes.container}>
			<span>
				Exchange rates shown as per {lastUpdated}. You have {symbol}
				{balance} {code} left.
			</span>
			<CurrencyTable
				className={classes.table}
				currencies={currencies}
				openTrader={openTrader}
			/>
			<CurrencyTransactionModal
				open={modalOpen}
				closeModal={closeTrader}
				transactionType={transactionType}
				currency={(currency && currency.code) || ''}
				symbol={(currency && currency.symbol) || ''}
				rate={transactionType === 'Buy' ? currency.buyRate : currency.sellRate}
			/>
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
}))(HomePage);
