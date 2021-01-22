
export function findById(id, array){
    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        if (id === item.id) {

            return item;

        }

    }
}

export function calcItemTotal(quantity, price) { 

    const total = quantity * Math.round(price * 100) / 100;


    // console.log(total);


    return total;  
}

export function calcOrderTotal(userCart, plants) {

    let total = 0; 

    for (let item of userCart) {

        const plant = findById(item.id, plants);

        const totalPrice = calcItemTotal(item.quantity, plant.price);
        
        total = total + totalPrice;
        
    }
    
    return total; 
}
