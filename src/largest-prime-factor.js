
export function factor(){
  return true;
}

export class UserInput{
  constructor(number){
    this.number = number;
    this.factors = [];
  }

  getFactors (){
    for (let i=1; i<=this.number; i++){
      if (this.number % i === 0){
        this.factors.push(i);
      }
    }
    return this.factors;
  }

  isPrime (possPrime) {
    for (let j=2; j<=Math.sqrt(possPrime); j++){
      if (j !== possPrime && possPrime%j === 0){
        return false;
      }
    }
    return true;
  }

  getLargestPrime() {
    let arr = this.getFactors();
    let largestPrime = 1;
    // arr.forEach((element) => {
    //   if (this.isPrime(element) && element > largestPrime){
    //     largestPrime = element;
    //   }
    // });
    for(let i=0; i<arr.length; i++){
      if (this.isPrime(arr[i]) && arr[i] > largestPrime){
        largestPrime = arr[i];
      }
    }
    return largestPrime;
  }
}
