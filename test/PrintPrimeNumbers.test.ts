import PrintPrimeNumbers from "../src/PrintPrimeNumbers";


test("Should print first 10 prime numbers", async() => {
  const printPrimeNumbers = new PrintPrimeNumbers();
  const primeNumbers = await printPrimeNumbers.execute();
  expect(primeNumbers).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
})