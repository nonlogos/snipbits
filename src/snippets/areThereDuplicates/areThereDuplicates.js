/**
 * Accepts a variable of arguments and checks
 * whether there are duplicates amongst the arguments passed in
 * bonus:
 * Time: O(n log n)
 * Space: O(1)
 */

// a, b, c, d, c
function areThereDuplicates() {
	if (arguments.length < 1) {
		return false;
	}
	const count = {};
	let j = arguments.length - 1;
	for (let i = 0; i <= Math.ceil(arguments.length / 2 - 1); i++) {
		count[i] ? count[i]++ : (count[i] = 1);
		if (i !== j) {
			count[j] ? count[j]++ : (count[j] = 1);
		}
		if (count[i] || count[j] > 1) {
			return true;
		}
		j--;
	}
	return false;
}

export default areThereDuplicates;
