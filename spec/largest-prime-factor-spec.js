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

  it("should store an array of factors when getFactors is called upon the UserInput instance", function(){
    reusableUserInput.getFactors();
    expect(reusableUserInput.factors instanceof Array).toBeTruthy();
  });
});
