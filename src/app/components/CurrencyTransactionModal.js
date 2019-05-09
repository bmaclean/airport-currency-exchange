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
import {CurrencyTransactionBody} from './';

/**
 * CurrencyTransactionModal provides the interface for entering the amount of currency to
 * exchange and calculating the total transaction cost. The modal is responsible for dispatching
 * transaction-related actions (buying/selling).
 */
function CurrencyTransactionModal(props) {
	const {
		settings,
		currency,
		dispatch,
		open,
		closeModal,
		symbol,
		transactionType,
		rate
	} = props;
	const {commissionPct, surcharge, minCommission} = settings;

	let [amount, setAmount] = useState('');

	const resetAndClose = () => {
		setAmount('');
		closeModal();
	};

	// receive the transaction type, currency code, and amount, then dispatch corresponding action
	const transact = () => {
		switch (transactionType) {
			case 'Buy':
				dispatch(buyCurrency(currency, amount));
				break;
			case 'Sell':
				dispatch(sellCurrency(currency, amount));
				break;
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
				{transactionType + ' ' + currency}
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
							<InputAdornment position="start">{symbol}</InputAdornment>
						),
						endAdornment: <InputAdornment position="end">.00</InputAdornment>
					}}
				/>
				<CurrencyTransactionBody
					amount={amount || 0}
					commissionPct={commissionPct && commissionPct.value}
					minCommission={minCommission && minCommission.value}
					rate={rate}
					surcharge={surcharge && surcharge.value}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={resetAndClose} color="secondary">
					Cancel
				</Button>
				<Button onClick={transact} variant="contained" color="primary">
					{transactionType}
				</Button>
			</DialogActions>
		</Dialog>
	);
}

function mapStateToProps(state) {
	const {settings, currencies} = state;
	return {settings, currencies};
}

export default connect(mapStateToProps)(CurrencyTransactionModal);
