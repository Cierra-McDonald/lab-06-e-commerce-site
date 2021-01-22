// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPlants } from '../Products/render-func.js';
import { plants } from '../Products/data.js';
import { calcItemTotal, findById, calcOrderTotal } from '../Cart/utils.js';
import { renderTableRow } from '../Cart/render-line-items.js';
import { userCart } from '../Cart/cart-data.js';


const test = QUnit.test;

test('should take in a plant and return a li', (expect) => {
   
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

    const actual = renderPlants(plants[0]);

    expect.equal(actual.outerHTML, expected);
});

test('findById function should take an array and an id and return the first item found that match', (expect) => {
    
    const expected = {
        id: 3, 
        image: 'mother-tongue.png',
        genus: 'Sansevieria trifasciata',
        size: 'Medium',
        light: 'Medium Light',
        price: '40',
        name: 'Mother-in-laws Tongue'
    };
  
    const actual = findById(3, plants);

    
    expect.deepEqual(actual, expected);
});

test('calcItemTotal function should take a quantity and amount and return the total', (expect) => {

    const expected = 327.15;
    
    const actual = calcItemTotal(5, 65.432123458797889);

    expect.equal(actual, expected);
});

test('should take in an order and return a table', (expect) => {
    
    const expected = 
`<tr>\
<td>Silver Evergreen</td>\
<td>2</td>\
<td>$120</td>\
</tr>`;

    const actual = renderTableRow(userCart[0], plants[0]);

    expect.equal(actual.outerHTML, expected);
});

test('calcOrderTotal function should add all the line items together to create one overall total', (expect) => {
    
    const plants = [
        {
            id: 2, 
            image: 'dragon-tree.png',
            genus: 'Dracaena marginata',
            size: 'Medium',
            light: 'Medium Light',
            price: '25',
            name: 'Dragon Tree'
        }, 
        {
            id: 3, 
            image: 'mother-tongue.png',
            genus: 'Sansevieria trifasciata',
            size: 'Medium',
            light: 'Medium Light',
            price: '40',
            name: 'Mother-in-laws Tongue'
        }, 
        {
            id: 5, 
            image: 'rubber-tree.png',
            genus: 'Ficus elastica',
            size: 'Medium',
            light: 'Low Light',
            price: '35',
            name: 'Rubber Tree'
        },
    ];
    const userCart = [
        {
            id: 2, 
            quantity: '1',
        }, 
        {
            id: 3,
            quantity: '4', 
        },
        {
            id: 5,
            quantity: '5',
        },
    ];

    const expected = 360;
    
    const actual = calcOrderTotal(userCart, plants);

    expect.equal(actual, expected);
});

