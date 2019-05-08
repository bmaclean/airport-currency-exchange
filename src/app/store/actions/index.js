/**
 * ACTION TYPES
 */

// Buy a given currency
export const BUY_CURRENCY = 'BUY_CURRENCY';

// Sell a given currency
export const SELL_CURRENCY = 'SELL_CURRENCY';

// Update admin settings
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

/**
 * ACTION CREATORS
 */

// TODO: margins/rates?
export function buyCurrency(currency, amount) {
	return {type: BUY_CURRENCY, currency, amount};
}

export function sellCurrency(currency, amount) {
	return {type: SELL_CURRENCY, currency, amount};
}

export function updateSettings(updatedSettings) {
	return {type: UPDATE_SETTINGS, updatedSettings};
}
