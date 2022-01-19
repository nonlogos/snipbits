import areThereDuplicates from './areThereDuplicates';

describe('areThereDuplicates', () => {
	it('should return true if there are duplicated arguments', () => {
		const result = areThereDuplicates(1, 2, 2);
		expect(result).toBeTruthy();
	});
	it('should return false if there are no duplicated arguments', () => {
		const result = areThereDuplicates('a', 'b', 'c', 'd');
		// expect(result).toBeFalsy();
	});
	it('should return false if there are no argument', () => {
		const result = areThereDuplicates();
		expect(result).toBeFalsy();
	});
});
