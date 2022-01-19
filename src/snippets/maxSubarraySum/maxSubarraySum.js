/**
 * Write a function called maxSubarraySum, which accepts
 * an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive elements in the array.
 * @param {*} arr
 * @param {*} n
 */
function maxSubarraySum(arr, n) {
	// handle edge case
	if (n > arr.length) {
		return null;
	}
	let max = 0;
	let temp = arr[0];
	// get first subArray sum value
	let j = 1;
	while (j < n) {
		temp += arr[j];
		j++;
	}
	max = temp;
	// loop through the check the rest of the sum values
	for (let i = n; i < arr.length; i++) {
		temp = temp - arr[i - n] + arr[i];
		max = Math.max(max, temp);
	}
	return max;
}

export default maxSubarraySum;
