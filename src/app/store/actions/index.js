/**
 * ACTION TYPES
 */

// Buy a given currency
export const BUY_CURRENCY = 'BUY_CURRENCY';

// Sell a given currency
export const SELL_CURRENCY = 'SELL_CURRENCY';

// Update admin settings
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

// fetch and update currency request
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

// currency fetch and update failed
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE';

// receive currency data
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

/**
 * ACTION CREATORS
 */

export function buyCurrency(currency, amount) {
	return {type: BUY_CURRENCY, currency, amount};
}

export function sellCurrency(currency, amount) {
	return {type: SELL_CURRENCY, currency, amount};
}

export function updateSettings(updatedSettings) {
	return {type: UPDATE_SETTINGS, updatedSettings};
}

export function receiveCurrencies(currencyData) {
	return {
		type: RECEIVE_CURRENCIES,
		rates: currencyData.rates,
		receivedAt: Date.now()
	};
}

export function fetchCurrenciesFailed() {
	return {
		type: FETCH_CURRENCIES_FAILURE,
		receivedAt: Date.now()
	};
}

export function fetchCurrencies(baseCurrency, currencies) {
	return function(dispatch) {
		return fetch(
			`https://api.exchangeratesapi.io/latest?base=${baseCurrency}&symbols=${currencies.join(
				','
			)}`
		)
			.then(
				response => response.json(),
				error => {
					// eslint-disable-next-line no-console
					console.error('An error occurred.', error);
					dispatch(fetchCurrenciesFailed());
				}
			)
			.then(data => dispatch(receiveCurrencies(data)));
	};
}
