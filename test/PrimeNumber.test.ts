import PrimeNumber from "../src/PrimeNumber";

test('Should check if number is prime', () => {
  const primeNumber = new PrimeNumber(3);
  expect(primeNumber.isPrime()).toBe(true);
})