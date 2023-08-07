export default class PrimeNumber {
  constructor (readonly number: number) {}  

  isPrime(): boolean {
    let count = 0;
    for (let i = this.number; i >= 1; i--) {
      const result = this.number / i;
      if (Number.isInteger(result)) {
        count++;
      }
      if (count > 2) {
        break;
      }
    }
    if (count > 2 || this.number === 0 || this.number === 1) {
      return false;
    } else {  
      return true;
    }
  }
}