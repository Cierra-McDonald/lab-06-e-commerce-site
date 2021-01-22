import { getCart, setCart, addItemToCart, clearCart } from "../Cart/utils.js";

// creating the DOM element in JS based on the hard code created in html
export function renderPlants(plant) {
    const li = document.createElement('li');
    li.classList.add('plants');
// creating a 'blank' space for each of these elements in html
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const pGenus = document.createElement('p');
    const pSize = document.createElement('p');
    const pLight = document.createElement('p');
    const pPrice = document.createElement('p');
    const addButton = document.createElement('button');

//  creating the actual data that will be looped onto the webpage
    h3.classList.add('plant-name');
    h3.textContent = plant.name; 
    li.append(h3);

    img.classList.add('plant-image');
    img.src = `../assets/${plant.image}`;
    img.textContent = plant.image;
    li.append(img);

    pGenus.classList.add('plant-genus');
    pGenus.textContent = plant.genus;
    li.append(pGenus); 

    pSize.classList.add('plant-size');
    pSize.textContent = plant.size; 
    li.append(pSize);

    pLight.classList.add('light-needs');
    pLight.textContent = plant.light; 
    li.append(pLight);

    pPrice.classList.add('plant-price');
    pPrice.textContent = '$' + plant.price; 
    li.append(pPrice);

    addButton.classList.add('add-to-cart');
    
    addButton.addEventListener('click', () => {
        console.log('hello');
        let locStorage = JSON.parse(localStorage.getItem('cartData'));
        console.log(locStorage);
        
        // let locStorage = getCart();
        // if (locStorage.length > 0){
        //     console.log();
        // }
    });
    addButton.textContent = 'Add to cart';
    li.append(addButton);

    return li;
}
