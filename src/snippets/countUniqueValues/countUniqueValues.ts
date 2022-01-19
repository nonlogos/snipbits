/**
 * implement a function called countUniqueValues
 * which accepts a sorted array and counts the unique values
 * in the array. There can be negative numbers in the array,
 * which will always be sorted
 * @param {*} arr
 * @returns number
 */

function countUniqueValues(arr) {
	if (arr.length === 0) {
		return 0;
	}
	let j = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[j]) {
			j += 1;
			arr[j] = arr[i];
		}
	}
	return j + 1;
}

export default countUniqueValues;
