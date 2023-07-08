import { it, expect, describe } from 'vitest';
import {
  capitalize,
  ellipsify,
  isBlank,
  isNotBlank,
  isEmpty,
  isNotEmpty,
  isString,
} from './index.js';

describe('capitalize', () => {
  it('should capitalize the first character', () => {
    expect(capitalize('test')).toBe('Test');
  });
});

describe('ellipsify', () => {
  it('should not add ellipsis to the end of a smaller string', () => {
    expect(ellipsify('text', 10)).toBe('text');
  });

  it('should not add ellipsis to the end of a string with the exact length', () => {
    expect(ellipsify('text', 4)).toBe('text');
  });

  it('should add ellipsis to the end of a larger string', () => {
    expect(ellipsify('text', 2)).toBe('te...');
  });
});

describe('isBlank', () => {
  it('should return true for spaces', () => {
    expect(isBlank(' ')).toBe(true);
    expect(isNotBlank(' ')).toBe(false);
  });

  it('should return true for tabs', () => {
    expect(isBlank('\t')).toBe(true);
    expect(isNotBlank('\t')).toBe(false);
  });

  it('should return false with a single character', () => {
    expect(isBlank('a')).toBe(false);
    expect(isNotBlank('a')).toBe(true);
  });
});

describe('isEmpty', () => {
  it('should return true when string length is 0', () => {
    expect(isEmpty('')).toBe(true);
    expect(isNotEmpty('')).toBe(false);
  });

  it('should return false with the existence of a tab', () => {
    expect(isEmpty('\t')).toBe(false);
    expect(isNotEmpty('\t')).toBe(true);
  });

  it('should return false with the existence of any character', () => {
    expect(isEmpty('t')).toBe(false);
    expect(isNotEmpty('t')).toBe(true);
  });
});

describe('isString', () => {
  it.each([0, true, {}, [], undefined, null])('should return false for non-strings', o => {
    expect(isString(o)).toBe(false);
  });

  it('should return true for strings', () => {
    expect(isString('text')).toBe(true);
  });
});
