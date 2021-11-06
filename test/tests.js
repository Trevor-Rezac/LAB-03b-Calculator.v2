// import './example.test.js';
import { add, subtract, multiply, divide, convert } from '../math-utils.js';

const test = QUnit.test;

// addition test
test('add() should take in two numbers 1 and 1 and return 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 1;
    const y = 1;
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

console.log(add(1, 1));

// subtraction test 
test('subtract() should take in two numbers 2 and 1 and return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 2;
    const y = 1;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

console.log(subtract(2, 1));

// multiplication test

test('multiply() should take in two numbers 2 and 2 and return 4', (expect) => {

    const x = 2;
    const y = 2;
    const expected = 4;

    const actual = multiply(x, y);

    expect.equal(actual, expected);
});

console.log(multiply(2, 2));

// division test

test('divide() should take in two numbers 2 and 2 and return 1', (expect) => {

    const x = 2;
    const y = 2;
    const expected = 1;

    const actual = divide(x, y);

    expect.equal(actual, expected);
});

console.log(divide(2, 2));

// celsius conversion test 

test('convert() should takes one number 32 and returns 89.6', (expect) => {

    const x = 32;
    const expected = 89.6;

    const acctual = convert(x);

    expect.equal(acctual, expected);
});

console.log(convert(32));