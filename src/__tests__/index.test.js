import { reverseStr } from '../index.js';

describe('test stroke', () => {
    it("reversr str Привет мир", () => {
        const result = reverseStr('Привет мир');
        expect(result).toBe('рим тевирП')
    }),

    it('reversr str hello world', () => {
        const result = reverseStr('hello world');
        expect(result).toBe('dlrow olleh')
    }),
    it('reversr str it is work!', () => {
        const result = reverseStr('it is work!');
        expect(result).toBe('!krow si ti')
    });
});