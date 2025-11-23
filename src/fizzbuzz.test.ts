// Write a function that takes numbers from 1 to 100 and outputs them as a string,
// but for multiples of three it returns “Fizz” instead of the number, and for
// multiples of five it returns “Buzz.” For numbers that are multiples of both
// three and five, it returns “FizzBuzz.”

import { FizzBuzz } from '.';

describe('FizzBuzz', () => {
  it.each([3, 9, 12])(
    'returns "Fizz" for number divisible by 3',
    (num) => {
      expect(FizzBuzz.run(num)).toBe('Fizz');
    }
  );

  it.each([5, 10, 20])(
    'returns "Buzz" for number divisible by 5',
    (num) => {
      expect(FizzBuzz.run(num)).toBe('Buzz');
    }
  );

  it.each([15, 30, 45])(
    'returns "FizzBuzz" for number divisible by 3 and 5',
    (num) => {
      expect(FizzBuzz.run(num)).toBe('FizzBuzz');
    }
  );

  it.each([1, 2, 4])(
    'returns number as string when a number that are not divisible by 3 or 5',
    (num) => {
      expect(FizzBuzz.run(num)).toBe(String(num));
    }
  );

  it.each([-1, -2, 101, 102])(
    'throws "number is out of range" when a number is less than 1 or greater than 100',
    (num) => {
      const errorMessage = 'number is out of range';
      expect(() => FizzBuzz.run(num)).toThrow(errorMessage);
    }
  );
});
