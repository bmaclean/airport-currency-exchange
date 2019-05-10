import {handleActions} from 'redux-actions';
import {set} from 'timm';
import moment from 'moment';
import {
	BUY_CURRENCY,
	SELL_CURRENCY,
	RECEIVE_CURRENCIES,
	FETCH_CURRENCIES_FAILURE,
	UPDATE_SETTINGS
} from './actions';
import * as CH from './helpers/CurrencyHelpers';
import currencyConfig from '../../config/currencies.json';

const INITIAL_STATE = {
	polling: {
		// whether or not the previous currency poll was successful
		pollingSuccessful: true,
		// date and time of last update
		updatedAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
		// date that the API last updated currency rates
		// note: it will be much less expensive to simply check if the API has updated than to deep compare
		// previous and future states
		apiLastUpdated: ''
	},
	// admin settings
	settings: {
		// currency data polling rate
		refreshRate: {
			label: 'Refresh currency exchange rates every',
			value: 60,
			unit: 'seconds'
		},
		// Margin that the currency exchange office makes on transactions
		marginPct: {
			label: 'Buy/Sell rate margin',
			value: 5,
			unit: 'percent'
		},
		// Percentage of each transaction earned as commission
		commissionPct: {
			label: 'Commission',
			value: 10,
			unit: 'percent'
		},
		// Additional flat rate surchage on every transaction
		surcharge: {
			label: 'Surcharge',
			value: 2.5,
			unit: 'dollars'
		},
		// The minimum commission amount per transaction
		minCommission: {
			label: 'Minimum Commission',
			value: 1.0,
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
			let newState = CH.reduceCurrency(
				state,
				action.baseCurrency,
				action.baseCurrencyAmount
			);
			return CH.increaseCurrency(
				newState,
				action.currency,
				action.currencyAmount
			);
		},

		[SELL_CURRENCY]: (state, action) => {
			let newState = CH.reduceCurrency(
				state,
				action.currency,
				action.currencyAmount
			);
			return CH.increaseCurrency(
				newState,
				action.baseCurrency,
				action.baseCurrencyAmount
			);
		},

		[RECEIVE_CURRENCIES]: (state, action) => {
			// in updateCurrencyRate, compare previous
			let newState;
			if (action.date === state.polling.apiLastUpdated) {
				newState = CH.stochasticUpdateCurrencyRates(
					state,
					action.rates,
					state.settings.marginPct.value
				);
			} else {
				newState = CH.updateCurrencyRates(
					state,
					action.rates,
					state.settings.marginPct.value
				);
			}
			return CH.updatePollingData(newState, true, action.date);
		},

		[FETCH_CURRENCIES_FAILURE]: (state, action) => {
			return CH.updatePollingData(state, false, '');
		},

		[UPDATE_SETTINGS]: (state, action) => {
			state = set(state, 'settings', action.updatedSettings);
			return state;
		}
	},
	INITIAL_STATE
);

export default acxAppReducer;
