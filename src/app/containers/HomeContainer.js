import React from 'react';
import {connect} from 'react-redux';
import {HomePage} from '../pages';
import config from '../../config/currencies.json';

/**
 * HomeContainer is the container component for the Home Page that connects to the Redux store and
 * provide HomePage with relevant data.
 */
function HomeContainer(props) {
	const {currencies, polling} = props;
	const baseCurrency = currencies.find(
		currency => currency.code === config.baseCurrency
	);
	const filteredCurrencies = currencies.filter(
		currency => currency.code !== config.baseCurrency
	);

	return (
		<HomePage
			currencies={filteredCurrencies}
			baseCurrency={baseCurrency}
			lastUpdated={polling.updatedAt}
		/>
	);
}

function mapStateToProps(state) {
	const {currencies, polling} = state;
	return {currencies, polling};
}

export default connect(mapStateToProps)(HomeContainer);
