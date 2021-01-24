import { renderTableRow } from './render-line-items.js';
import { plants } from '../Products/data.js';
import { clearCart, findById, getCart } from './utils.js';


const tbody = document.querySelector('tbody');

const button = document.querySelector('button');

// const orderButton = document.getElement'button');

const cart = getCart();
if (cart.length === 0) {
    button.disabled = true;
}
let total = 0;

for (let item of cart) {
    const plant = findById(item.id, plants);
    const totalForPlant = item.quantity * plant.price;
 

    total = total + totalForPlant;
    const tableRow = renderTableRow(item);

    tbody.append(tableRow);
    
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');


td3.textContent = `total: $${total}`;


tr.append(td1, td2, td3);

tbody.append(tr);

button.addEventListener('click', () => {

    alert(JSON.stringify(cart, true, 2));
    clearCart();
    window.location.href = '../';

});
