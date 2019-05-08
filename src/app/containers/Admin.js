import React from 'react';
import {AdminPage} from '../pages'

/**
 * Admin is the container component for the Admin Page that connects to the Redux store and
 * provide AdminPage with relevant data.
 */
export default function Admin(props) {
	const {classes} = props;
	// TODO: placeholder
	const settings = [
		{label: 'Refresh currency exchange rates every', unit: 'seconds'},
		{label: 'Commission', unit: 'percent'},
		{label: 'Surcharge', unit: 'dollars'},
		{label: 'Minimum Commission', unit: 'dollars'},
		{label: 'Buy/Sell rate margin', unit: 'percent'}
	];

	return (
		<AdminPage settings={settings} />
	);
}
