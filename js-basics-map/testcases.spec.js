import {describe, expect, test} from '@jest/globals'
import { result } from "./index";

describe('JavaScript DataStructure Implementation', () => {
  describe('- Arrays: Transform Object with associated key values into elements of an Array', () => {
    const elems = { "test": true };
    const input = result(elems);
    test(`The input is Object with Record()<test = true>`, () => {
      expect(expect.objectContaining(elems)).toStrictEqual(expect.objectContaining({ "test": true }));
    });
    test(`The result is an instance of 'Array' from input Object`, () => {
      const output = [ 'test', true ];
      expect(input).toBeInstanceOf(Array);
    });
    test(`The result Array has elements from input object: ['test', true]`, () => {
      expect(result(input)).toEqual(expect.arrayContaining(['test', true]));
    })
  })
});
