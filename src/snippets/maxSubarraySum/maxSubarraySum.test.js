import maxSubarraySum from './maxSubarraySum';

describe('it should returns max subarraySum based on consecutive number', () => {
	it('should work with positive numbers', () => {
		const arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];
		const result = maxSubarraySum(arr, 3);
		expect(result).toBe(19);
	});
	it('should work with negative numbers', () => {
		const arr = [-1, -2, -3, -6, -1, 0, 1, 7];
		const result = maxSubarraySum(arr, 2);
		expect(result).toBe(8);
	});
	it('should handle use case for when consecutive number is greater than array length', () => {
		const arr = [-1, -2, -3, -6, -1, 0, 1, 7];
		const result = maxSubarraySum(arr, 9);
		expect(result).toBeNull();
	});
});
