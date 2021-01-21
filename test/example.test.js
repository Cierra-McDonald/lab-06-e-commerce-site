// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPlants } from '../Products/render-func.js';
import { plants } from '../Products/data.js';
import { calcItemTotal, findById } from '../Cart/utils.js';
import { renderTableRow } from '../Cart/render-line-items.js';
import { userCart } from '../Cart/cart-data.js';

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

test('findById function should take an array and an id and return the first item found that match', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 3, 
        image: 'mother-tongue.png',
        genus: 'Sansevieria trifasciata',
        size: 'Medium',
        light: 'Medium Light',
        price: '40',
        name: 'Mother-in-laws Tongue'
    };
  

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(3, plants);

    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('calcItemTotal function should take a quantity and amount and return the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 327.15;
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = calcItemTotal(5, 65.432123458797889);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should take in an order and return a table', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 
`<tr>\
<td>Silver Evergreen</td>\
<td>2</td>\
<td>$120</td>\
</tr>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(userCart[0], plants[0]);

    console.log(actual);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});