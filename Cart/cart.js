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

console.log(total);