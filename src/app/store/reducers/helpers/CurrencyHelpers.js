import {update} from 'timm';

/**
 * updateCurrencyRates receives the previous state, new rates, and the buy/sell rate margin,
 * and returns the new state with updated rates.
 */
export function updateCurrencyRates(state, rates, margin) {
	return update(state, 'currencies', currencies =>
		currencies.map(currency => ({
			...currency,
			buyRate: rates[currency.code] * (1 - parseFloat(margin)),
			sellRate: rates[currency.code] * (1 + parseFloat(margin))
		}))
	);
}
