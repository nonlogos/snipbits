/**
 * given 2 positive integers, find out if the 2 numbers have the same frequency of digits
 * Time: O(n)
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */

function sameFrequency(num1, num2) {
	// check for missing arguments
	if (!num1 || !num2) {
		return false;
	}
	const num1Str = String(num1);
	const num2Str = String(num2);
	const count = {};

	// return false if num1Str length does not equal num2Str length
	if (num1Str.length !== num2Str.length) {
		return false;
	}
	// store both instances of each digit from num1Str and num2Str in count object
	for (let i = 0; i < num1Str.length; i++) {
		count[num1Str[i]] ? count[num1Str[i]]++ : (count[num1Str[i]] = 1);
		count[num2Str[i]] ? count[num2Str[i]]++ : (count[num2Str[i]] = 1);
	}
	// return false if each digit count is not divisible by 2
	for (let key in count) {
		if (count[key] % 2 !== 0) {
			return false;
		}
	}
	return true;
}

export default sameFrequency;
