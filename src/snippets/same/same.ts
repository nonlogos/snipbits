function same(baseArr, compArr) {
	// write a function called 'Same', which accepts 2 arrays.
	// the function should return true if every value in the array
	// has it's corresponding value squared in the second array
	// the frequecy of values must be the same

	if (baseArr.length !== compArr.length) {
		return false;
	}
	let baseLog = {};
	let compLog = {};
	baseArr.forEach((value) => (baseLog[value] = baseLog[value] + 1 || 1));
	compArr.forEach((value) => (compLog[value] = compLog[value] + 1 || 1));

	for (const key in baseLog) {
		const keySquare = Math.pow(key, 2);
		if (!compLog[keySquare] || compLog[keySquare] !== baseLog[key]) {
			return false;
		}
	}
	return true;
}

export default same;
