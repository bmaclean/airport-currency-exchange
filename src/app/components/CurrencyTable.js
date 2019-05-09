import React from 'react';
import {Table, TableBody, withStyles} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';
import {CurrencyRow, CurrencyTableHead} from './';

/**
 * CurrencyTable displays the set of available currencies with respective buy/sell prices and
 * amounts.
 */
function CurrencyTable(props) {
	const {classes, currencies, openTrader, ...rest} = props;

	return (
		<Table {...rest}>
			<CurrencyTableHead />
			<TableBody className={classes.tableBody}>
				{currencies.map(currency => (
					<CurrencyRow
						key={currency.code}
						currency={currency}
						hover
						openTrader={openTrader}
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
