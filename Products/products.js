import { renderPlants } from './render-func.js'; 
import { plants } from './data.js'; 
// this is a loop that goes through the index of the plant array through the render-func layout created in render-func
const ul = document.getElementById('plantList');

for (let i = 0; i < plants.length; i++) {
    let sumVar = renderPlants(plants[i]);
    ul.appendChild(sumVar); 
}




