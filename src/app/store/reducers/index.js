import {combineReducers} from 'redux';
import {BUY_CURRENCY, SELL_CURRENCY} from '../actions';
import currencyConfig from '../../../config/currencies.json';

const INITIAL_STATE = {
	// The base currency in which we're trading
	baseCurrency: 'USD',
	// admin settings
	settings: {
		refreshRate: {
			label: 'Refresh currency exchange rates every',
			value: 3600,
			unit: 'seconds'
		},
		// Margin that the currency exchange office makes on transactions
		marginPct: {
			label: 'Buy/Sell rate margin',
			value: 0.06,
			unit: 'percent'
		},
		// Percentage of each transaction earned as commission
		commissionPct: {
			label: 'Commission',
			value: 0.10,
			unit: 'percent'
		},
		// Additional flat rate surchage on every transaction
		surcharge: {
			label: 'Surcharge',
			value: 0.75,
			unit: 'dollars'
		},
		// The minimum commission amount per transaction
		minCommision: {
			label: 'Minimum Commission',
			value: 2.50,
			unit: 'dollars'
		},
	},
	// set of currencies
	currencies: {
		USD: {
			code: currencyConfig.currencies.USD.code,
			name: currencyConfig.currencies.USD.name,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.USD.initialBalance
		},

		CAD: {
			code: currencyConfig.currencies.CAD.code,
			name: currencyConfig.currencies.CAD.name,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.CAD.initialBalance
		},

		EUR: {
			code: currencyConfig.currencies.EUR.code,
			name: currencyConfig.currencies.EUR.name,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.EUR.initialBalance
		},

		GBP: {
			code: currencyConfig.currencies.GBP.code,
			name: currencyConfig.currencies.GBP.name,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.GBP.initialBalance
		},

		JPY: {
			code: currencyConfig.currencies.JPY.code,
			name: currencyConfig.currencies.JPY.name,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.JPY.initialBalance
		},

		AUD: {
			code: currencyConfig.currencies.AUD.code,
			name: currencyConfig.currencies.AUD.name,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.AUD.initialBalance
		},

		THB: {
			code: currencyConfig.currencies.THB.code,
			name: currencyConfig.currencies.THB.name,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.THB.initialBalance
		}
	}
};

function currencies(state = INITIAL_STATE.currencies, action) {
	switch (action.type) {
		case BUY_CURRENCY:
			break;
		case SELL_CURRENCY:
			break;
		default:
			return state;
	}
}

function settings(state = INITIAL_STATE.settings, action) {
	return state;
}

export const acxApp = combineReducers({
	currencies,
	settings
});

export default acxApp;
