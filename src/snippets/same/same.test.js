import same from './same';

describe('same', () => {
  it( "should return true if every value in the array has it's corresponding value squared in the second array", () => {
    const res = same( [1, 2], [1, 4] );
    expect(res).toBe(true);
  });
  it( "should return false if frequecy of values are not the same", () => {
    const res = same( [1, 2], [1, 4, 5] );
    const res2 = same( [1, 2, 2], [1, 4] );
    const res3 = same([1, 2, 3, 3], [1, 4, 4, 9]);
    expect(res).toBe(false);
    expect(res2).toBe( false );
    expect(res3).toBe(false);
  })
})