import React from 'react';
import {
	TableCell,
	TableRow
} from '@material-ui/core';

/**
 * CurrencyRow accepts a given currency object and returns a TableRow for that currency.
 */
export default function CurrencyTableHead(props) {
	const {currency, ...rest} = props;

	return (
		<TableRow hover {...rest}>
			<TableCell>{currency.code}</TableCell>
			<TableCell>1.000</TableCell>
			<TableCell>2.000</TableCell>
			<TableCell>3.000</TableCell>
		</TableRow>
	);
}
