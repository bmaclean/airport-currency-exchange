import React from 'react';
import {HomePage} from '../pages';

/**
 * Home is the container component for the Home Page that connects to the Redux store and
 * provide HomePage with relevant data.
 */
export default function Home(props) {
	const {classes} = props;
	// TODO: placeholders
	const lastUpdated = 'XX/XX/XXXX';
	const amountRemaining = 'XXX.XX';
	const baseCurrency = 'USD';
	const baseCurrencySymbol = '$';

	return (
		<HomePage />
	);
}
