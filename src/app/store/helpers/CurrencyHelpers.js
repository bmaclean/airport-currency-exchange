import {update, setIn} from 'timm';

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
 * reduceCurrency reduces the balance of `currency` in state by `currencyAmount`
 */
// TODO: validate when amount > balance (in component)
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
 * setPollingSuccess updates the polling success status in `state` to `status`
 */
export function setPollingSuccess(state, status) {
	return setIn(state, ['polling', 'pollingSuccessful'], status);
}
