/**
 * toDecimalPlace returns `num` to the `decimals` decimal place.
 **/
const toDecimalPlace = (num, decimals) => {
	return parseFloat(num).toFixed(decimals);
};

export default toDecimalPlace;
