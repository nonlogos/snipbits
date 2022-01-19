function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	if (arr[left] > 0 || arr[right] < 0 || arr[left] + arr[right] < 0) {
		return;
	}
	while (left < right) {
		const sum = arr[left] + arr[right];
		if (sum === 0) {
			return [].concat(arr[left], arr[right]);
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-1, 0, 1, 2, 3]));
console.log(sumZero([-2, -1, 0, 0, 4]));
console.log(sumZero([-2, -1, 0, 1, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-1, -2, -3]));
