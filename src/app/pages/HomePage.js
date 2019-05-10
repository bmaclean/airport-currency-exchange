import React, {useState} from 'react';
import {withStyles} from '@material-ui/core';
import {Snackbar, CurrencyTable, CurrencyTransactionModal} from '../components';
import {toDecimalPlace} from '../helpers';

/**
 * HomePage is the main dashboard from which the user can interact with the currency table
 * and see currency update information and remaining balance.
 */
function HomePage(props) {
	const {baseCurrency, classes, currencies, lastUpdated} = props;
	const {balance, code, symbol} = baseCurrency;

	let [snackbarOpen, setSnackbarOpen] = useState(false);
	let [snackbarMessage, setSnackbarMessage] = useState('');
	let [modalOpen, setModalOpen] = useState(false);
	let [transactionType, setTransactionType] = useState('');
	let [currency, setCurrency] = useState('');

	const openTrader = (transactionType, currency) => {
		setModalOpen(true);
		setTransactionType(transactionType);
		setCurrency(currency);
	};

	const closeTrader = () => {
		setModalOpen(false);
	};

	const openSnackbarWithMessage = message => {
		setSnackbarOpen(true);
		setSnackbarMessage(message);
	};

	const closeSnackbar = message => {
		setSnackbarOpen(false);
		setSnackbarMessage('');
	};

	return (
		<div className={classes.container}>
			<span>
				Exchange rates shown as per {lastUpdated}. You have {symbol}
				{toDecimalPlace(balance, 2)} {code} left.
			</span>
			<CurrencyTable
				className={classes.table}
				currencies={currencies}
				openTrader={openTrader}
			/>
			{/* TODO: bloated props */}
			<CurrencyTransactionModal
				baseCurrency={baseCurrency}
				open={modalOpen}
				closeModal={closeTrader}
				transactionType={transactionType}
				currency={currency}
				rate={transactionType === 'Buy' ? currency.buyRate : currency.sellRate}
				onInvalidTransaction={openSnackbarWithMessage}
			/>
			<Snackbar
				message={snackbarMessage}
				open={snackbarOpen}
				close={closeSnackbar}
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
