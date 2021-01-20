

export function renderPlants(plant) {
    const li = document.createElement('li');
    li.classList.add('plants');

    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const pGenus = document.createElement('p');
    const pSize = document.createElement('p');
    const pLight = document.createElement('p');
    const pPrice = document.createElement('p');
    const addButton = document.createElement('button');


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
    addButton.textContent = 'Add to cart';
    li.append(addButton);

    return li;
}