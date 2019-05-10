import {update} from 'timm';
import moment from 'moment';

/**
 * updateCurrencyRates receives the previous state, new rates, and the buy/sell rate margin,
 * and returns the new state with updated rates.
 */
export function updateCurrencyRates(state, rates, margin) {
	return update(state, 'currencies', currencies =>
		currencies.map(currency => ({
			...currency,
			buyRate: rates[currency.code] * (1 - parseFloat(margin / 100)),
			sellRate: rates[currency.code] * (1 + parseFloat(margin / 100))
		}))
	);
}

/**
 * stochasticUpdateCurrencyRates receives the previous state, new rates, and the buy/sell rate margin,
 * and returns a new state with stochastically adjusted rates.
 */
export function stochasticUpdateCurrencyRates(state, rates, margin) {
	const rand = Math.random() * (1.02 - 0.98) + 0.98;
	return update(state, 'currencies', currencies =>
		currencies.map(currency => ({
			...currency,
			buyRate: rates[currency.code] * (1 - parseFloat(margin / 100)) * rand,
			sellRate: rates[currency.code] * (1 + parseFloat(margin / 100)) * rand
		}))
	);
}

/**
 * reduceCurrency reduces the balance of `currency` in state by `currencyAmount`
 */
export function reduceCurrency(state, currency, currencyAmount) {
	return update(state, 'currencies', currencies => {
		return currencies.map(curr => {
			return curr.code === currency
				? {...curr, balance: curr.balance - currencyAmount}
				: curr;
		});
	});
}

/**
 * increaseCurrency increases the balance of `currency` in state by `currencyAmount`
 */
export function increaseCurrency(state, currency, currencyAmount) {
	return update(state, 'currencies', currencies => {
		return currencies.map(curr => {
			return curr.code === currency
				? {
						...curr,
						balance: parseFloat(curr.balance) + parseFloat(currencyAmount)
				  }
				: curr;
		});
	});
}

/**
 * setPollingSuccess updates the polling data in `state` with success `status` and `date`
 */
export function updatePollingData(state, status, date) {
	return update(state, ['polling'], polling => ({
		...polling,
		pollingSuccessful: status,
		updatedAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
		apiLastUpdated: date
	}));
}
