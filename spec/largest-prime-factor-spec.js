import {factor} from "../src/largest-prime-factor";
import {UserInput} from "../src/largest-prime-factor";

describe("factor", function(){
  it("should return true", function(){
    expect(factor()).toBeTruthy();
  });
});

describe("UserInput", function(){
  let reusableUserInput;

  beforeEach(function() {
    reusableUserInput = new UserInput(26);
  });

  it("should store a number as a property when constructed", function(){
    expect(reusableUserInput.number).toEqual(26);
  });

  it("should store an array when getFactors is called upon the UserInput instance", function(){
    reusableUserInput.getFactors();
    expect(reusableUserInput.factors instanceof Array).toBeTruthy();
  });

  it("should store an array of factors when getFactors is called upon the UserInput instance", function(){
    reusableUserInput.getFactors();
    expect(reusableUserInput.factors).toContain(13);
    expect(reusableUserInput.factors).toContain(2);
    expect(reusableUserInput.factors).toContain(1);
  });

  it("should return true for 5", function(){
    expect(reusableUserInput.isPrime(5)).toBeTruthy();
  });

  it("should return the largest prime when getLargestPrime get called", function(){
    let input = new UserInput(10);
    expect(input.getLargestPrime()).toEqual(5);
  })

});
