/**
 * @jest-environment jsdom
 */

const { expect } = require('@jest/globals');
const romanToInt = require('./romToInt');

test('properly converts romans to decimals', () => {

    expect(romanToInt('IX')).toBe(9);

});