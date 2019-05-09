import {handleActions} from 'redux-actions';
import {set} from 'timm';
import {
	BUY_CURRENCY,
	SELL_CURRENCY,
	RECEIVE_CURRENCIES,
	UPDATE_SETTINGS,
} from '../actions';
import * as CH from './helpers/CurrencyHelpers';
import currencyConfig from '../../../config/currencies.json';

const INITIAL_STATE = {
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
			value: 0.1,
			unit: 'percent'
		},
		// Additional flat rate surchage on every transaction
		surcharge: {
			label: 'Surcharge',
			value: 0.75,
			unit: 'dollars'
		},
		// The minimum commission amount per transaction
		minCommission: {
			label: 'Minimum Commission',
			value: 2.5,
			unit: 'dollars'
		}
	},
	// list of currencies, initialized using configuration file
	currencies: [
		{
			code: currencyConfig.currencies.USD.code,
			name: currencyConfig.currencies.USD.name,
			symbol: currencyConfig.currencies.USD.symbol,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.USD.initialBalance
		},

		{
			code: currencyConfig.currencies.CAD.code,
			name: currencyConfig.currencies.CAD.name,
			symbol: currencyConfig.currencies.CAD.symbol,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.CAD.initialBalance
		},

		{
			code: currencyConfig.currencies.EUR.code,
			name: currencyConfig.currencies.EUR.name,
			symbol: currencyConfig.currencies.EUR.symbol,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.EUR.initialBalance
		},

		{
			code: currencyConfig.currencies.GBP.code,
			name: currencyConfig.currencies.GBP.name,
			symbol: currencyConfig.currencies.GBP.symbol,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.GBP.initialBalance
		},

		{
			code: currencyConfig.currencies.JPY.code,
			name: currencyConfig.currencies.JPY.name,
			symbol: currencyConfig.currencies.JPY.symbol,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.JPY.initialBalance
		},

		{
			code: currencyConfig.currencies.AUD.code,
			name: currencyConfig.currencies.AUD.name,
			symbol: currencyConfig.currencies.AUD.symbol,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.AUD.initialBalance
		},
		{
			code: currencyConfig.currencies.THB.code,
			name: currencyConfig.currencies.THB.name,
			symbol: currencyConfig.currencies.THB.symbol,
			buyRate: 1,
			sellRate: 1,
			balance: currencyConfig.currencies.THB.initialBalance
		}
	]
};

const acxAppReducer = handleActions(
	{
		[BUY_CURRENCY]: (state, action) => {
			return state;
		},

		[SELL_CURRENCY]: (state, action) => {
			return state;
		},

		[RECEIVE_CURRENCIES]: (state, action) => {
			return CH.updateCurrencyRates(state, action.rates, '0.08');
		},

		[UPDATE_SETTINGS]: (state, action) => {
			state = set(state, 'settings', action.updatedSettings);
			return state;
		}
	},
	INITIAL_STATE
);

export default acxAppReducer;
