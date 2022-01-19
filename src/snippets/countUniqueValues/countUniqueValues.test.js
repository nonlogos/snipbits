import countUniqueValues from './countUniqueValues';

describe('Count Unique Values', () => {
	it('should count only unique values', () => {
		const arr = [1, 1, 1, 2, 3, 4, 4, 5, 6];
		const uniqueValues = countUniqueValues(arr);
		expect(uniqueValues).toBe(6);
	});
	it('should count unique values when unique values start the array', () => {
		const arr = [1, 2, 3, 3, 10, 10, 23];
		const uniqueValues = countUniqueValues(arr);
		expect(uniqueValues).toBe(5);
	});
	it('should return zero when an empty array is passed in', () => {
		expect(countUniqueValues([])).toBe(0);
	});
	it('should also count unique values with negative numbers in array', () => {
		const arr = [-2, -1, -1, 0, 1];
		expect(countUniqueValues(arr)).toBe(4);
	});
});
