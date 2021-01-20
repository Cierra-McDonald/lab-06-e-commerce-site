// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPlants } from '../Products/render-func.js';
import { plants } from '../Products/data.js';

const test = QUnit.test;

test('should take in a plant and return a li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 
    `<li class="plants">\
<h3 class="plant-name">Silver Evergreen</h3>\
<img class="plant-image" src="../assets/silver-evergreen.png">\
<p class="plant-genus">Aglaonema</p>\
<p class="plant-size">Medium</p>\
<p class="light-needs">Low Light</p>\
<p class="plant-price">$60</p>\
<button class="add-to-cart">Add to cart</button>\
</li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlants(plants[0]);

    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
