import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContent,
	InputAdornment,
	TextField
} from '@material-ui/core';
import {buyCurrency, sellCurrency} from '../store/actions';
import {computeTransactionDetails} from '../helpers';
import {CurrencyTransactionBody} from './';

/**
 * CurrencyTransactionModal provides the interface for entering the amount of currency to
 * exchange and calculating the total transaction cost. The modal is responsible for dispatching
 * transaction-related actions (buying/selling).
 */
function CurrencyTransactionModal(props) {
	const {
		baseCurrency,
		settings,
		currency,
		dispatch,
		open,
		closeModal,
		transactionType,
		rate,
		onInvalidTransaction
	} = props;

	let [amount, setAmount] = useState('');

	const {commissionPct, surcharge, minCommission} = settings;
	const {subtotal, commission, total} = computeTransactionDetails(
		amount,
		commissionPct.value,
		surcharge.value,
		minCommission.value,
		rate
	);

	const resetAndClose = () => {
		setAmount('');
		closeModal();
	};

	// receive the transaction type, currency code, and amount, then dispatch corresponding action
	const transact = () => {
		switch (transactionType) {
			case 'Buy':
				if (currency.balance < amount) {
					onInvalidTransaction(`Insufficient funds for ${currency.code}`);
				} else {
					// receive `total` of base currency, lose `amount` of requested currency
					dispatch(
						buyCurrency(baseCurrency.code, total, currency.code, amount)
					);
				}
				break;
			case 'Sell':
				if (baseCurrency.balance < amount) {
					onInvalidTransaction(`Insufficient funds for ${baseCurrency.code}`);
				} else {
					// lose `amount` of base currency, receive `total` of requested currency
					dispatch(
						sellCurrency(baseCurrency.code, total, currency.code, amount)
					);
				}
				break;
			default:
				// eslint-disable-next-line no-console
				console.trace(
					'Attempted transaction with invalid transactionType in CurrencyTransactionModal'
				);
				return;
		}
		resetAndClose();
	};

	return (
		<Dialog
			open={open}
			onClose={resetAndClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">
				{transactionType + ' ' + currency.code}
			</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margin="dense"
					fullWidth
					type="number"
					value={amount}
					onChange={e => setAmount(e.target.value)}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								{currency.symbol}
							</InputAdornment>
						),
						endAdornment: <InputAdornment position="end">.00</InputAdornment>
					}}
				/>
				<CurrencyTransactionBody
					commission={commission}
					rate={rate}
					subtotal={subtotal}
					total={total}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={resetAndClose} color="secondary">
					Cancel
				</Button>
				{/* TODO: button hover colours are broken */}
				<Button onClick={transact} variant="contained" color="primary">
					{transactionType}
				</Button>
			</DialogActions>
		</Dialog>
	);
}

function mapStateToProps(state) {
	const {settings} = state;
	return {settings};
}

export default connect(mapStateToProps)(CurrencyTransactionModal);
