import PrimeNumber from "./PrimeNumber";

export default class PrintPrimeNumbers {
  
  async execute() {    
    const primeNumbers = [];
    let number = 1;
    while (primeNumbers.length < 10) {
      const primeNumber = new PrimeNumber(number);
      if (primeNumber.isPrime()) {
        primeNumbers.push(number);
      }
      number++;
    }
    return primeNumbers;
  }
}