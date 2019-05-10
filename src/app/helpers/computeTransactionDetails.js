export default function computeTransactionDetails(
	amount = 0,
	commissionPct = 0,
	surcharge = 0,
	minCommission = 0,
	rate = 1
) {
	//TODO: divide ptc's by 100
	const subtotal = amount / rate;
	const commission = Math.max(
		commissionPct * parseFloat(subtotal) + parseFloat(surcharge),
		minCommission
	);
	const total = parseFloat(subtotal) + parseFloat(commission);
	return {subtotal, commission, total};
}