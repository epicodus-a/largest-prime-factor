
export function factor(){
  return true;
}

export class UserInput{
  constructor(number){
    this.number = number;
    this.factors = [];
  }

  getFactors (){
    for (let i=1; i<=Math.sqrt(this.number); i++){
      if (this.number % i === 0){
        this.factors.push(i);
      }
    }
  }

  // isPrime (possPrime) {
  //   for (let j=2; j<=Math.sqrt(possPrime); j++){
  //     if (j !== possPrime && possPrime%j === 0){
  //       return false;
  //     }
  //   }
  //   return true;
  // }

}

let testUserInput = new UserInput(4);
testUserInput.number;
