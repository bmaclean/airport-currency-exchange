import React from 'react';
import {
	Table,
	TableBody,
	TableRow,
	TableCell,
	withStyles
} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';
import currencyConfig from '../../config/currencies.json';
import {CurrencyRow, CurrencyTableHead} from './';

/**
 * CurrencyTable displays the set of available currencies with respective buy/sell prices and
 * amounts.
 */
function CurrencyTable(props) {
	const {classes, openTrader, ...rest} = props;
	const currencyList = currencyConfig.currencies.filter(
		currency => !currency.baseCurrency
	);

	return (
		<Table {...rest}>
			<CurrencyTableHead />
			<TableBody stripedRows className={classes.tableBody}>
				{currencyList.map(currency => (
					<CurrencyRow
						key={currency.code}
						currency={currency}
						hover
						onClick={openTrader}
					/>
				))}
			</TableBody>
		</Table>
	);
}

export default withStyles(theme => ({
	tableBody: {
		// alternating shaded rows
		'& tr:nth-child(even)': {
			backgroundColor: grey['100']
		}
	}
}))(CurrencyTable);
