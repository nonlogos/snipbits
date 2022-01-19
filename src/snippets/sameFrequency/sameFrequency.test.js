import sameFrequecy from './sameFrequency';

describe('same frequency', () => {
	it('should returns true if the two arguments have same digits(frequency)', () => {
		const result = sameFrequecy(182, 281);
		expect(result).toBeTruthy();
	});
	it('should returns false if the two arguments have different digits(frequency)', () => {
		const result = sameFrequecy(34, 14);
		expect(result).toBeFalsy();
	});
	it('should returns false if missing argument(s)', () => {
		const result = sameFrequecy();
		expect(result).toBeFalsy();
	});
});
