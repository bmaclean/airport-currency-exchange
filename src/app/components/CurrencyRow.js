import React from 'react';
import {TableCell, TableRow} from '@material-ui/core';
import {toDecimalPlace} from '../helpers';

/**
 * CurrencyRow accepts a given currency object and returns a TableRow for that currency.
 */
export default function CurrencyRow(props) {
	const {currency, openTrader, ...rest} = props;

	return (
		<TableRow hover {...rest}>
			<TableCell>{currency.code}</TableCell>
			<TableCell onClick={() => openTrader('Buy', currency)}>
				{toDecimalPlace(currency.buyRate, 4)}
			</TableCell>
			<TableCell onClick={() => openTrader('Sell', currency)}>
				{toDecimalPlace(currency.sellRate, 4)}
			</TableCell>
			<TableCell>{toDecimalPlace(currency.balance, 2)}</TableCell>
		</TableRow>
	);
}
