import { plants } from '../Products/data.js';
import { findById, calcItemTotal } from './utils.js';

export function renderTableRow(cartItem) {
    const quantity = cartItem.quantity;
    const plant = findById(cartItem.id, plants);

    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const qualTd = document.createElement('td');
    const priceTd = document.createElement('td');


    nameTd.textContent = plant.name;
    qualTd.textContent = quantity; 
    priceTd.textContent = `$${calcItemTotal(quantity, plant.price)}`;
     
    tr.append(nameTd);
    tr.append(qualTd);
    tr.append(priceTd);

    return tr;
}