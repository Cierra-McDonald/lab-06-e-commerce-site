// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('should take in a plant and return a li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = <li class="plants">
    <h3 class="plant-name"> Silver Evergreen </h3>
    <img class="silver-evergreen" src="assets/"/>
    <p class="plant-genus">Aglaonema</p>
    <p class="plant-price">$60</p>
    <p class="plant-size">Medium</p>
    <p class="light-needs"> Low Light </p>
    <button class="add-to-cart"> Add to cart</button>
    </li>;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
