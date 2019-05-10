import React from 'react';
import {TableCell, TableHead, TableRow} from '@material-ui/core';

/**
 * CurrencyTableHead provides the header for the CurrencyTable with predefined column labels.
 */
export default function CurrencyTableHead(props) {
	return (
		<TableHead>
			<TableRow>
				<TableCell align="left">Currency</TableCell>
				<TableCell align="left">Buy</TableCell>
				<TableCell align="left">Sell</TableCell>
				<TableCell align="left">Amount</TableCell>
			</TableRow>
		</TableHead>
	);
}
