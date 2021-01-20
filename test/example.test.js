// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { plants } from '../data.js';

const test = QUnit.test;

test('should take in a plant and return a li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 1, 
        image: 'silver-evergreen.png',
        genus: 'Aglaonema', 
        size: 'Medium',
        light: 'Low light',
        price: '60',
    }, 
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = 
    
    `<ul>
    <li class="plants">
        <h3 class="plant-name"> Silver Evergreen </h3>
        <img class="silver-evergreen" src="assets/">
        <p class="plant-genus">Aglaonema</p>
        <p class="plant-size">Medium</p>
        <p class="light-needs"> Low Light </p>
        <p class="plant-price">$60</p>
        <button class="add-to-cart"> Add to cart</button>
    </li>
</ul>`

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
