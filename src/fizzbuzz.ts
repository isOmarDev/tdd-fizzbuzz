export class FizzBuzz {
  private static readonly FIZZ = 'Fizz';
  private static readonly BUZZ = 'Buzz';
  private static readonly FIZZBUZZ = 'FizzBuzz';

  private static readonly MIN_RANGE = 1;
  private static readonly MAX_RANGE = 100;

  private static isOutOfRange(num: number) {
    return num < this.MIN_RANGE || num > this.MAX_RANGE;
  }

  private static isMultipleOf3(num: number) {
    return num % 3 === 0;
  }

  private static isMultipleOf5(num: number) {
    return num % 5 === 0;
  }

  static run(num: number) {
    if (this.isOutOfRange(num)) {
      throw new Error('number is out of range');
    }

    if (this.isMultipleOf3(num) && this.isMultipleOf5(num))
      return this.FIZZBUZZ;
    if (this.isMultipleOf3(num)) return this.FIZZ;
    if (this.isMultipleOf5(num)) return this.BUZZ;

    return String(num);
  }
}
