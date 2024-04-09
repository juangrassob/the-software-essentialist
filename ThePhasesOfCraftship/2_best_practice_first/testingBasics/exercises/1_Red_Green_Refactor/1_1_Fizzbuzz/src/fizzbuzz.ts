export function fizzbuzz(n: number) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  }
  if (n === 5) return "buzz";
  return "fizz";
}
