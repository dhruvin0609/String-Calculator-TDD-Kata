const add = require('./stringCalculator');

// base test case for empty string

test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
    expect(add("abc")).toBe(0);
    expect(add("01")).toBe(1);
    expect(add(null)).toBe(0);

});

// test case for checking sum of only 1 number
test('returns the number itself for a single number', () => {
    expect(add('1')).toBe(1);
    expect(add('5')).toBe(5);
});

// test case for checking sum of 2 numbers
test('returns the sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
    expect(add('4,5')).toBe(9);
});

// test case for checking sum of 2 numbers
test('returns the sum of two comma-separated numbers', () => {
    expect(add('12,2')).toBe(14);
    expect(add('4,5')).toBe(9);
});