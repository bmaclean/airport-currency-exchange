import React from 'react';
import {connect} from 'react-redux';
import {HomePage} from '../pages';
import config from '../../config/currencies.json';

/**
 * Home is the container component for the Home Page that connects to the Redux store and
 * provide HomePage with relevant data.
 */
function Home(props) {
	const {currencies} = props;
	const baseCurrency = currencies.find(
		currency => currency.code === config.baseCurrency
	);
	const filteredCurrencies = currencies
		.filter(currency => currency.code !== config.baseCurrency)
		.sort((a, b) => a.code > b.code);

	return (
		<HomePage currencies={filteredCurrencies} baseCurrency={baseCurrency} />
	);
}

function mapStateToProps(state) {
	const {currencies} = state;
	return {currencies};
}

export default connect(mapStateToProps)(Home);
