import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCurrencies} from './store/actions';
import {AppHeader} from './components';
import {AdminContainer, HomeContainer} from './containers';
import ACXLogo from '../assets/logo.jpg';
import config from '../config/currencies.json';

/**
 * Top-level component for the Airport Currency Exchange (ACX) App. Provides redux store and theme context
 * to application subtree. Handles app routing.
 */
function ACXApp(props) {
	const {dispatch, settings} = props;

	// TODO: this is a workaround to implement currency data polling
	//       in the future, this should be implemented using redux-saga
	let timeout;
	const pollCurrencyData = (base, currencies) => {
		dispatch(fetchCurrencies(base, currencies));
		timeout = setTimeout(
			() => pollCurrencyData(base, currencies),
			settings.refreshRate.value * 1000
		);
		return timeout;
	};

	useEffect(() => {
		pollCurrencyData(config.baseCurrency, Object.keys(config.currencies));

		return function cleanup() {
			clearInterval(timeout);
		};
	});

	return (
		<Router>
			<AppHeader title="Airport Currency Exchange Office" logo={ACXLogo} />
			<Route exact path="/" component={HomeContainer} />
			<Route exact path="/admin" component={AdminContainer} />
		</Router>
	);
}

function mapStateToProps(state) {
	const {settings} = state;
	return {settings};
}

export default connect(mapStateToProps)(ACXApp);
