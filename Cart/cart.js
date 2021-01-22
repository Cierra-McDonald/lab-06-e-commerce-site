import { userCart } from './cart-data.js';
import { renderTableRow } from './render-line-items.js';
import { plants } from '../Products/data.js';
import { findById } from './utils.js';


const tbody = document.querySelector('tbody');

let total = 0;

for (let item of userCart) {
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

