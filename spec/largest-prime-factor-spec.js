import {factor} from "../src/largest-prime-factor";
import {UserInput} from "../src/largest-prime-factor";

describe("factor", function(){
  it("should return true", function(){
    expect(factor()).toBeTruthy();
  });
});

describe("UserInput", function(){
  it("should store a number as a property when constructed", function(){
    let newUserInput = new UserInput(4);
    expect(newUserInput.number).toEqual(4);
  });
});
